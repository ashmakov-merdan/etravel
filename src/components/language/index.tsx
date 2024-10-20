import TranslateIcon from "@/lib/icons/TranslateIcon";

const Language = () => {
  return (
    <div className="flex justify-end">
      <button className="p-3 border rounded-full border-neutral-500">
        <TranslateIcon color={"#737373"} />
      </button>
    </div>
  )
};

export default Language;