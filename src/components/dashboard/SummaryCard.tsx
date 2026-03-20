export const SummaryCard = ({ label, value }: { label: string; value: string }) => {
    return (
        <div className="rounded-2xl border border-border bg-surface p-5 shadow-sm"> 
            <p className="text-sm text-muted">{label}</p>
            <p className="mt-2 text-3xl font-semibold tracking-tight text-foreground">{value}</p>
        </div>
    );
}