import { X, Upload, Link2 } from "lucide-react";

export default function AddProductModal({
  isOpen,
  onClose,
  formData,
  setFormData,
  onSave
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl animate-scale-in">

        {/* HEADER */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h2 className="text-xl font-semibold">Add New Product</h2>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full">
            <X />
          </button>
        </div>

        {/* BODY */}
        <div className="p-6 space-y-4">

          {/* IMAGE */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-32 h-32 border-2 border-dashed rounded-xl flex items-center justify-center bg-gray-50">
              {formData.image ? (
                <img src={formData.image} className="w-full h-full object-cover rounded-xl" />
              ) : (
                <Upload className="text-gray-400" size={32} />
              )}
            </div>

            <div className="flex gap-2 w-full">
              <input
                type="url"
                placeholder="Paste Image URL"
                value={formData.image}
                onChange={e => setFormData({ ...formData, image: e.target.value })}
                className="flex-1 h-10 px-3 border rounded-lg"
              />
              <Link2 className="text-gray-400 mt-2" />
            </div>
          </div>

          {/* FORM GRID */}
          <div className="grid grid-cols-2 gap-4">

            <input
              type="text"
              placeholder="Product Name"
              value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
              className="col-span-2 h-11 px-4 border rounded-lg"
            />

            <input
              type="number"
              placeholder="Price ₹"
              value={formData.price}
              onChange={e => setFormData({ ...formData, price: e.target.value })}
              className="h-11 px-4 border rounded-lg"
            />

            <input
              type="number"
              placeholder="Stock"
              value={formData.stock}
              onChange={e => setFormData({ ...formData, stock: e.target.value })}
              className="h-11 px-4 border rounded-lg"
            />
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex justify-end gap-3 px-6 py-4 border-t bg-gray-50 rounded-b-2xl">
          <button onClick={onClose} className="px-5 py-2 rounded-lg bg-gray-200">
            Cancel
          </button>
          <button
            onClick={onSave}
            className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          >
            Save Product
          </button>
        </div>
      </div>
    </div>
  );
}
