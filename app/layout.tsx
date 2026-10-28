import type {Metadata} from 'next';
import './globals.css';
import {Shell} from '@/components/shell';
export const metadata:Metadata={title:{default:'MAISON ÉCLAT — The art of being unforgettable',template:'%s | MAISON ÉCLAT'},description:'An independent world of extraordinary fragrance. Explore the collection and create your signature scent.'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en" data-scroll-behavior="smooth"><body><Shell>{children}</Shell></body></html>}
