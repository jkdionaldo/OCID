const RequestAccessForm = ({onBack}) => (
    <div className="w-full max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
        <p>Please Contact or Reach Out OCID Office located at CSU Library 2nd Floor</p>
        {/* Fields will go here */}
        <button type="button" onClick={onBack} className="mt-4 w-full py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 focues:outline=none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"> Back to Login
        </button>
    </div>
);
export default RequestAccessForm;