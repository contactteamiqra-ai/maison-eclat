'use client';
import {create} from 'zustand';
import {persist} from 'zustand/middleware';
export type BagItem={key:string;name:string;size:number;price:number;quantity:number;color:string;configuration?:Record<string,string>};
type Store={items:BagItem[];favorites:string[];open:boolean;setOpen:(v:boolean)=>void;add:(item:Omit<BagItem,'quantity'>)=>void;quantity:(key:string,n:number)=>void;favorite:(slug:string)=>void;clear:()=>void};
export const useBag=create<Store>()(persist((set)=>({items:[],favorites:[],open:false,setOpen:(open)=>set({open}),add:(item)=>set(s=>({open:true,items:s.items.some(i=>i.key===item.key)?s.items.map(i=>i.key===item.key?{...i,quantity:Math.min(99,i.quantity+1)}:i):[...s.items,{...item,quantity:1}]})),quantity:(key,n)=>set(s=>({items:n<=0?s.items.filter(i=>i.key!==key):s.items.map(i=>i.key===key?{...i,quantity:Math.max(1,Math.min(Math.floor(n) || 1,99))}:i)})),favorite:(slug)=>set(s=>({favorites:s.favorites.includes(slug)?s.favorites.filter(i=>i!==slug):[...s.favorites,slug]})),clear:()=>set({items:[]})}),{name:'maison-eclat-bag',partialize:s=>({items:s.items,favorites:s.favorites})}));
