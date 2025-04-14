import { useState } from "react";
import PageBreadcrumb from "../components/common/PageBreadCrumb";
import PageMeta from "../components/common/PageMeta";

export default function SliderManagement() {
  const [sliders, setSliders] = useState([
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
  ]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") { 
          setSliders([...sliders, reader.result]); // Ensure only a string is added
        }
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleRemoveImage = (index: number) => {
    setSliders(sliders.filter((_, i) => i !== index));
  };
  

  return (
    <div>
      <PageMeta title="Woqqy" description="Woqqy Admin Panel - Slider Management" />
      <PageBreadcrumb pageTitle="Manage Sliders" />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <div className="mx-auto w-full max-w-[1300px]">
          <h3 className="mb-4 font-semibold text-gray-800 text-theme-xl dark:text-white/90 sm:text-2xl">
            Slider Management
          </h3>
          
          <input type="file" accept="image/*" onChange={handleImageUpload} className="mb-4 px-3 py-2 border border-gray-300 rounded-md" />
          
          <div className="grid grid-cols-3 gap-4">
            {sliders.map((image, index) => (
              <div key={index} className="relative">
                <img src={image} alt={`Slider ${index}`} className="w-full h-40 object-cover rounded-md" />
                <button onClick={() => handleRemoveImage(index)} className="absolute top-2 right-2 px-2 py-1 text-xs text-white bg-red-500 rounded-md">
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
