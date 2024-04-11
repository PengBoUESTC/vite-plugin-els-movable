import { PluginOption } from 'vite';
export interface MovableOptions {
    calssPrefix: string;
}
export default function elsMovable(options: Partial<MovableOptions>): PluginOption;
