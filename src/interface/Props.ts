export interface TableBodyProps {
  id: string;
  address: string;
  label: string;
  description: string;
  floorsNumber: number;
  refresh: Function;
  handleDetails: Function;
}

export interface DetailsProps {
  closeDetails: Function;
  details: {
    address: string;
    floorsNumber: number;
    description: string;
    label: string;
  };
}
