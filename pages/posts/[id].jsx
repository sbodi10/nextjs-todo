import { useRouter } from 'next/router';

export default function NotePage() {
    const router = useRouter();
    console.log(router);
    return (
        <div>{router.query.id}</div>
    );
}