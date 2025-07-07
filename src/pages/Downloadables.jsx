export default function Downloadables() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Downloadables</h1>
      <p className="text-lg mb-6">Here are some resources you can download:</p>
      <div className="flex flex-col items-center space-y-4">
        <a
          href="/files/sample-document.pdf"
          download
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          Download Sample Document
        </a>
        <a
          href="/files/sample-guide.pdf"
          download
          className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
        >
          Download Sample Guide
        </a>
        <a
          href="/files/sample-report.pdf"
          download
          className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
        >
          Download Sample Report
        </a>
      </div>
    </div>
  );
}
