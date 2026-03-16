import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Iniciando la siembra de la base de datos...')

  // 1. Crear el usuario Administrador con contraseña encriptada
  const hashedPassword = await bcrypt.hash('Admin123!', 10)

  const admin = await prisma.user.upsert({
    where: { email: 'admin@janetduque.com' },
    update: {}, // Si ya existe, no hace nada
    create: {
      name: 'Administrador',
      email: 'admin@janetduque.com',
      password: hashedPassword,
    },
  })
  console.log('✅ Usuario administrador asegurado:', admin.email)

  // 2. Crear la configuración inicial del sitio
  const siteConfig = await prisma.siteConfig.upsert({
    where: { id: 'config-inicial' },
    update: {},
    create: {
      id: 'config-inicial',
      reviewCount: 88,
    },
  })
  console.log('✅ Configuración inicial lista:', siteConfig.reviewCount, 'reseñas')

  // 3. Crear un Post de prueba para que la web no esté vacía
  const dummyPost = await prisma.post.upsert({
    where: { slug: 'bienvenidos-a-psicologia-online' },
    update: {},
    create: {
      slug: 'bienvenidos-a-psicologia-online',
      title: 'Bienvenidos a mi nuevo espacio de bienestar',
      excerpt: 'Un lugar diseñado para brindar herramientas de terapia de aceptación y compromiso (ACT).',
      content: '<p>Este es el contenido inicial del blog. Aquí podrás escribir tus artículos completos.</p>',
      category: 'Bienestar',
      image: '/blog-placeholder.webp', // Puedes cambiar esta ruta luego
      readTime: '3 min',
      isFeatured: true,
    },
  })
  console.log('✅ Artículo de prueba publicado:', dummyPost.title)

  console.log('🌲 ¡Siembra completada con éxito!')
}

main()
  .catch((e) => {
    console.error('❌ Error durante la siembra:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })