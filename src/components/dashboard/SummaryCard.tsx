export const SummaryCard = ({ label, value }: { label: string; value: string }) => {
    return (
        <div className="rounded-2xl bg-white border shadow-sm p-4"> 
            <p className="text-sm text-slate-600">{label}</p>
            <p className="text-2xl font-semibold tracking-tight">{value}</p>
        </div>
    );
}