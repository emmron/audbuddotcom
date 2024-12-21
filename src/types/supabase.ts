export interface Strain {
  id: string;
  name: string;
  type: string;
  thc: number;
  cbd: number;
  description: string;
  effects: string[];
  image_url?: string;
}

export interface Database {
  public: {
    Tables: {
      strains: {
        Row: Strain;
        Insert: Omit<Strain, 'id'>;
        Update: Partial<Omit<Strain, 'id'>>;
      };
    };
  };
} 