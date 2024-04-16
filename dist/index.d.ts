import { PluginOption } from 'vite';
export interface MovableOptions {
    classPrefix: string;
}
export default function elsMovable(options: Partial<MovableOptions>): PluginOption;
