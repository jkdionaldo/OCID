const RequestAccessForm = ({onBack}) => (
    <div className="w-full max-w-md mx-auto py-20">
        <h2 className="text-2xl font-bold mb-4 text-center">Want to Register?</h2>
        <p className="font-poppins text-center font-medium">To register an account, please contact us at <a className="text-[#2356f6]">ocid@carsu.edu.ph</a> or visit the <a className="text-[#2356f6]">Office of Curriculum and Instruction Development (OCID)</a> Located at Caraga State University Library 2nd Floor Right Wing and Look for <b> Ms. Angelica F. Plantado</b></p>
        {/* Fields will go here */}
        <button type="button" onClick={onBack} className="mt-12 w-full py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 focues:outline=none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"> Back to Login
        </button>
    </div>
);
export default RequestAccessForm;