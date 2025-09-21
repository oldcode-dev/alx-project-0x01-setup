export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
};


export type UserProps = {
    name: string;
    email: string;
};

export type PostProps = {
    title: string;
    content: string;
    author?: string;
    date?: string;
};
