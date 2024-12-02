import { useLocation } from "react-router-dom";
import { TypographyH4 } from "./components/ui/typographyH4";
import { Key } from "react";

function NewPage() {
    const location = useLocation();
    const { savedEntries } = location.state || {}; // Fallback in case state is undefined

    return (
        <div>
            <h1>New Page</h1>
            {savedEntries ? (
                <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-4">Saved Entries</h2>
                    <ul className="space-y-4">
                        {savedEntries.map((entry: { name: string; email: string; }, index: Key | null | undefined) => (
                            <li key={index} className="p-4 border border-gray-300 rounded-lg bg-white shadow">
                                <div>
                                    <TypographyH4 text={entry.name} />
                                    <TypographyH4 text={entry.email} />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>No entries available.</p>
            )}
        </div>
    );
}

export default NewPage;
