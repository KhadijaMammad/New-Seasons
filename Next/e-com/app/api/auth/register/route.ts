import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

let users: { id: number; email: string; password: string }[] = [];

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    if (users.find((u) => u.email === email)) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = { id: Date.now(), email, password: hashedPassword };
    users.push(newUser);

    return NextResponse.json({ message: "Registered successfully", user: { id: newUser.id, email } });
  } catch (err) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
