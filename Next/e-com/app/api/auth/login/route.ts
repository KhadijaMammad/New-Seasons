import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

let users: { id: number; email: string; password: string }[] = [];

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    const user = users.find((u) => u.email === email);
    if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) return NextResponse.json({ error: "Invalid password" }, { status: 401 });

    return NextResponse.json({ message: "Login successful", user: { id: user.id, email } });
  } catch (err) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
