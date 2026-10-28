'use client';
import {create} from 'zustand';
import {persist} from 'zustand/middleware';
import type {BottleConfig} from '@/components/bottle-scene';
export const defaultConfiguration:BottleConfig={shape:'Classic',size:'50',family:'Amber',top:'Bergamot',heart:'Jasmine',base:'Sandalwood',cap:'Ribbed',tint:'#eee0c4',label:'#f6f0e7',engraving:''};
export const useAtelier=create<{configuration:BottleConfig;update:(c:BottleConfig|((c:BottleConfig)=>BottleConfig))=>void}>()(persist(set=>({configuration:defaultConfiguration,update:next=>set(s=>({configuration:typeof next==='function'?next(s.configuration):next}))}),{name:'maison-eclat-atelier'}));
