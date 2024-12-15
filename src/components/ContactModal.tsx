import React from 'react'

type IProps = {
    setIsOpen: (isOpen: boolean) => void;
    formData: {
        name: string;
        email: string;
        subject: string;
        message: string;
    };
    isLoading: boolean;
    handleSubmit: (e: any) => void;
    handleInputChange: (e: any) => void;
}

const ContactModal = (props: IProps) => {
    const { handleInputChange, setIsOpen, formData, handleSubmit, isLoading } = props;
    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 sm:p-10">
            <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg">
                <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">Contact Us</h2>
                <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-500 hover:text-gray-700"
                >
                    ✖
                </button>
                </div>
                    <form onSubmit={handleSubmit} className="mt-4">
                    {/* Name */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 text-black rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your name"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 text-black rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    {/* Subject */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Subject
                        </label>
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 text-black rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter subject"
                        />
                    </div>

                    {/* Message */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                        Message
                        </label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows={4}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 text-black rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Write your message"
                            required
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end items-center">
                        {isLoading ? (
                        <div className="loader border-t-transparent border-solid border-4 border-blue-500 rounded-full w-6 h-6 animate-spin"></div>
                        ) : (
                        <>
                            <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg mr-2 hover:bg-gray-300"
                            >
                            Cancel
                            </button>
                            <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                            >
                            Send Message
                            </button>
                        </>
                        )}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactModal;
