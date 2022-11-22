export type ClassValue =
	| ClassArray
	| ClassFunction
	| ClassObject
	| string
	| number
	| null
	| boolean
	| undefined;
export type ClassArray = ClassValue[];
export type ClassObject = Record<string, any>;
export type ClassFunction = () => ClassValue;

export declare function classNames(...inputs: ClassValue[]): string;

export default classNames;