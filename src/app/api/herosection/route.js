const { NextResponse } = require("next/server");
import connectDB from "@/lib/mongodb";
import HeroSection from "@/models/HeroSection";

// GET

export async function GET() {
  try {
    await connectDB();
    const herosection = await HeroSection.find().sort({
      createdAt: -1,
    });

    return NextResponse.json({
      success: true,
      data: herosection,
    });
  } catch (error) {
    console.error("GET error:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// POST
export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    const herosection = await HeroSection.create(body);

    return NextResponse.json({ success: true, data: herosection }, { status: 201 });
  } catch (error) {
    console.error("POST error:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
