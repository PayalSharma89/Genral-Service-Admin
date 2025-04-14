import { useState } from "react";
import PageBreadcrumb from "../components/common/PageBreadCrumb";
import PageMeta from "../components/common/PageMeta";

const faqs = [
  {
    id: 1,
    question: "What is the return policy?",
    answer: "You can return your items within 30 days of receiving them.",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 2,
    question: "How do I reset my password?",
    answer: "Click on 'Forgot Password' and follow the instructions.",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 3,
    question: "How to contact support?",
    answer: "You can contact us via email at support@example.com.",
    image: "https://via.placeholder.com/100",
  },
];

export default function FAQList() {
  const [openModal, setOpenModal] = useState(false);
  const [newFAQ, setNewFAQ] = useState({
    question: "",
    answer: "",
    image: null as File | null,
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => {
    setOpenModal(false);
    setNewFAQ({ question: "", answer: "", image: null });
    setImagePreview(null);
  };

  const handleAddFAQ = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    faqs.push({
      id: faqs.length + 1,
      question: newFAQ.question,
      answer: newFAQ.answer,
      image: imagePreview || "https://via.placeholder.com/100",
    });
    handleCloseModal();
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setImagePreview(reader.result);
          setNewFAQ({ ...newFAQ, image: file });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <PageMeta title="Woqqy" description="Woqqy Admin Panel - FAQ Management" />
      <PageBreadcrumb pageTitle="Manage FAQ List" />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <div className="mx-auto w-full max-w-[1300px]">
          <h3 className="mb-4 font-semibold text-gray-800 text-theme-xl dark:text-white/90 sm:text-2xl">
            FAQ Management
          </h3>
          <button
            onClick={handleOpenModal}
            className="mb-4 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Add FAQ
          </button>

          <div className="overflow-x-auto rounded-lg shadow-md">
            <table className="w-full table-auto text-left">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="py-3 px-4">Question</th>
                  <th className="py-3 px-4">Answer</th>
                  <th className="py-3 px-4">Image</th>
                  <th className="py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {faqs.map((faq) => (
                  <tr key={faq.id} className="border-t border-gray-200 dark:border-gray-700">
                    <td className="py-3 px-4">{faq.question}</td>
                    <td className="py-3 px-4">{faq.answer}</td>
                    <td className="py-3 px-4">
                      <img src={faq.image} alt="FAQ" className="w-20 h-20 object-cover" />
                    </td>
                    <td className="py-3 px-4">
                      <button className="ml-2 px-3 py-1 text-xs text-red-600 bg-red-100 rounded-md hover:bg-red-200">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {openModal && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
              <div className="bg-white p-6 rounded-lg w-1/3">
                <h2 className="text-xl mb-4">Add New FAQ</h2>
                <form onSubmit={handleAddFAQ}>
                  <div className="mb-4">
                    <label className="block text-sm">Question</label>
                    <input
                      type="text"
                      value={newFAQ.question}
                      onChange={(e) => setNewFAQ({ ...newFAQ, question: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm">Answer</label>
                    <textarea
                      value={newFAQ.answer}
                      onChange={(e) => setNewFAQ({ ...newFAQ, answer: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm">Upload Image</label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      required
                    />
                    {imagePreview && <img src={imagePreview} alt="Preview" className="mt-2 w-20 h-20 object-cover" />}
                  </div>
                  <div className="flex justify-end">
                    <button type="button" onClick={handleCloseModal} className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md mr-2">
                      Cancel
                    </button>
                    <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
                      Add FAQ
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
