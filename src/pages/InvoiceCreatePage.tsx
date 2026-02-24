import { useNavigate } from 'react-router-dom';
import SimplePage from '@/shared/ui/simple-page/SimplePage';

export default function InvoiceCreatePage() {
  const navigate = useNavigate();

  return (
    <SimplePage title="New invoice">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="h-[38px] rounded-[8px] border border-[#e5e5e5] bg-white px-3 font-['Inter:Medium',sans-serif] text-[14px] text-[#0a0a0a]"
        >
          Back
        </button>
        <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#737373]">
          Create flow is not implemented yet.
        </p>
      </div>
    </SimplePage>
  );
}

