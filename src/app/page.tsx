import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">ProductionOS</h1>
          <div className="flex items-center space-x-4">
            <p className="text-sm text-gray-500">開発環境</p>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6">
        <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
          <h2 className="text-xl font-semibold mb-4">生産管理システムへようこそ</h2>
          <p className="text-gray-600 mb-4">
            このシステムは製造業向けの受注管理、納品管理などを一元化するプラットフォームです。
          </p>
          
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* カード1 */}
            <div className="bg-blue-50 rounded-lg p-5 border border-blue-100">
              <h3 className="font-medium text-blue-800 mb-2">受注管理</h3>
              <p className="text-sm text-gray-600">お客様からの受注情報を管理します</p>
            </div>
            
            {/* カード2 */}
            <div className="bg-green-50 rounded-lg p-5 border border-green-100">
              <h3 className="font-medium text-green-800 mb-2">納品管理</h3>
              <p className="text-sm text-gray-600">製品の納品状況を管理します</p>
            </div>
            
            {/* カード3 */}
            <div className="bg-purple-50 rounded-lg p-5 border border-purple-100">
              <h3 className="font-medium text-purple-800 mb-2">在庫管理</h3>
              <p className="text-sm text-gray-600">製品の在庫状況を管理します</p>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="font-medium mb-3">開発状況</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
                <span>環境構築完了</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-yellow-500 mr-2"></div>
                <span>システム設計中</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-gray-300 mr-2"></div>
                <span>開発フェーズ（未着手）</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}