// src/app/api/orders/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const orders = await prisma.order.findMany({
      include: {
        customer: true,
        items: {
          include: {
            product: true,
          },
        },
        deliveries: true,
      },
    });
    
    return NextResponse.json(orders);
  } catch (error) {
    console.error('受注データの取得に失敗:', error);
    return NextResponse.json(
      { error: '受注データの取得に失敗しました' },
      { status: 500 }
    );
  }
}