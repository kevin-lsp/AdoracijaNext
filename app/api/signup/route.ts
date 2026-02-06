import { NextResponse } from 'next/server';
import { signupSchema } from '@/lib/validations/signup';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate the data
    const validatedData = signupSchema.parse(body);

    // TODO: Here you can:
    // 1. Send an email notification to admin
    // 2. Store in database
    // 3. Send confirmation email to user

    console.log('New signup:', validatedData);

    // For now, just return success
    return NextResponse.json({
      success: true,
      message: 'Prijava uspešna!',
    });
  } catch (error) {
    console.error('Signup error:', error);

    return NextResponse.json(
      {
        success: false,
        error: 'Napaka pri pošiljanju. Prosimo, poskusite ponovno.',
      },
      { status: 400 }
    );
  }
}
