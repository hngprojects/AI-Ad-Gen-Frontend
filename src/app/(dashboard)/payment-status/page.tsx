import Link from "next/link"
import { ArrowRight, CircleAlert } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function PaymentPendingPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="mx-auto max-w-md w-full">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#f3baf3]">
            <CircleAlert className="h-10 w-10 text-[#b800b8]" />
          </div>
          <CardTitle className="text-2xl">Payment Processing</CardTitle>
          <CardDescription className="text-base">Thank you for your payment</CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <p className="mb-4">
            Your subscription plan is being processed and will be updated soon. This usually takes just a few minutes.
          </p>
          <div className="relative mx-auto my-6 h-2 max-w-xs overflow-hidden rounded-full bg-muted">
            <div className="animate-progress absolute inset-y-0 left-0 w-full bg-[#b800b8]"></div>
          </div>
          <p className="text-sm text-muted-foreground">
            You will receive an email confirmation once your subscription is active.
          </p>
        </CardContent>
        <CardFooter>
          <Button asChild className="w-full gap-2 bg-[#b800b8] hover:bg-[#960096]">
            <Link href="/dashboard">
              Return to Dashboard
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

