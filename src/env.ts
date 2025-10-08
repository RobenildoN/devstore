import {z} from 'zod'
import { th } from 'zod/locales'

const envSchema = z.object({
    NEXT_PUBLIC_API_BASE_URL: z.string().url(),
    APP_URL: z.string().url(),
})

const processEnv = envSchema.safeParse(process.env)

if (!processEnv.success) {
    console.error('Invalid environment variables:', processEnv.error.format())
    throw new Error('Invalid environment variables')
}
export const env = processEnv.data

