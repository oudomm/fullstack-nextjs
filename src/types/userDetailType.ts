export type UserDetailType = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  phone: string;
  gender: string;
  company: {
    name: string;
    title: string;
  };
  address: {
    address: string;
    city: string;
    state: string;
  };
  // Add any other fields you need from the detail API
};
