import React from 'react'
import { Alert, AlertDescription, AlertTitle } from './ui/alert'
import { AlertCircle } from 'lucide-react'

const CalcAlert = () => {
    return (
        <div className="md:w-80 w-80">
            <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Note</AlertTitle>
                <AlertDescription>
                    This calculator valid only for cosmetic, shoes and cloth
                </AlertDescription>
            </Alert>
        </div>
    )
}

export default CalcAlert