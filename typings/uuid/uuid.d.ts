declare module UUID {
    export function v1(): string;
    export function v4(): string;
}


declare module "uuid" {
    export = UUID;
}