import { useNavigate } from "react-router-dom";
import { Button } from "./components/ui/button";
import { useState, useEffect } from 'react';
import { Input } from "./components/ui/input";

function HomePage() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
    });

    const [savedEntries, setSavedEntries] = useState<{ name: string; email: string }[]>([]);

    useEffect(() => {
        const entries = JSON.parse(localStorage.getItem('formEntries') || '[]');
        setSavedEntries(entries);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const updatedEntries = [...savedEntries, formData];
        localStorage.setItem('formEntries', JSON.stringify(updatedEntries));
        setSavedEntries(updatedEntries);
        setFormData({ name: '', email: '' });
    };

    const handleClearCache = () => {
        localStorage.removeItem('formEntries');
        setSavedEntries([]);
    };

    return (
        <div className="">
            <div className="p-6 max-w-md w-full bg-white rounded-lg shadow-md">
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <Input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="name"
                        />
                    </div>
                    <div className="mb-6">
                        <Input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="email"
                        />
                    </div>
                    <Button type="submit" className="w-full py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg">
                        Submit
                    </Button>
                </form>
                <Button
                    onClick={handleClearCache}
                    className="w-full py-3 mt-4 text-white bg-red-600 hover:bg-red-700 rounded-lg"
                >
                    Clear Cache
                </Button>
                <Button
                    className="w-full py-3 mt-4 text-white bg-green-600 hover:bg-green-700 rounded-lg"
                    onClick={() => navigate('/new-page', { state: { savedEntries } })}
                >
                    Go to New Page
                </Button>
            </div>
        </div>
    );
}

export default HomePage;
