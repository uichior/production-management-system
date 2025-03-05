import { NextResponse } from 'next/server';

// モックデータを返すようにする
export async function GET() {
  try {
    // 本物のデータベースの代わりにハードコードされたデータを返す
    const orders = [
      {
        id: 1,
        orderNumber: 'ORD-2025-0001',
        customerId: 1,
        customer: {
          name: '株式会社テック'
        },
        orderDate: '2025-03-05T00:00:00.000Z',
        dueDate: '2025-03-12T00:00:00.000Z',
        status: 'processing',
        totalAmount: 245000
      },
      {
        id: 2,
        orderNumber: 'ORD-2025-0002',
        customerId: 2,
        customer: {
          name: 'ABC商事'
        },
        orderDate: '2025-03-05T00:00:00.000Z',
        dueDate: '2025-03-15T00:00:00.000Z',
        status: 'manufacturing',
        totalAmount: 78000
      }
    ];
    
    return NextResponse.json(orders);
  } catch (error) {
    console.error('受注データの取得に失敗:', error);
    return NextResponse.json(
      { error: '受注データの取得に失敗しました' },
      { status: 500 }
    );
  }
}