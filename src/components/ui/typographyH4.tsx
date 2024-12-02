type TypographyH4Props = {
    text: string;
};

export function TypographyH4({ text }: TypographyH4Props) {
    return (
        <h4 className="scroll-m-10 text-xl font-semibold text-black bg-transparent">
            {text}
        </h4>
    );
}
