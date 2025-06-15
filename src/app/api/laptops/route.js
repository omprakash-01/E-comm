import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Laptop from "@/models/Laptop";

// GET /api/laptops
export async function GET() {
  try {
    await connectDB();
    const laptops = await Laptop.find().sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      data: laptops,
    });
  } catch (error) {
    console.error("GET error:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// POST /api/laptops
export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    const laptop = await Laptop.create(body);

    return NextResponse.json({ success: true, data: laptop }, { status: 201 });
  } catch (error) {
    console.error("POST error:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
