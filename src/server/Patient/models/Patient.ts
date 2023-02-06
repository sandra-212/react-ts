export interface Patient {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    sex: string;
    birthDate: string;
    height?: number;
    weight?: number;
    uli: number; // Unique lifetime identifier (i.e., patient healthcare number)
}
