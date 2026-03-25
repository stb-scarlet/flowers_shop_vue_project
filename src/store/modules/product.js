import { defineStore } from "pinia"
import { ref, computed } from "vue"

export const useProductStore = defineStore("product", () => {
  const products = ref([
    {
      id: 1,
      src: '/product-images/1.avif',
      name: 'Rose – Mediterranean, Asia',
      price: 152,
      category: 'Garden Plants',
      title: 'Roses – fragrant, romantic blooms from Mediterranean and Asia.',
      description: 'Roses are classic flowers originating from the Mediterranean and Asia, known for their fragrant blooms and romantic symbolism. Tulips, native to Central Asia and Anatolia, are famous for their bright, cup-shaped petals and vibrant spring colors. Lilies grow across the temperate Northern Hemisphere and are celebrated for their elegance and variety of patterns. Orchids, thriving in the Amazon Rainforest and Southeast Asia, are prized for their exotic shapes and rarity. Sunflowers, native to the North American plains, are recognized for their tall stems and large, sunny blooms. Hyacinths come from the Eastern Mediterranean and are known for their dense clusters of fragrant flowers. Peonies, originally from China and Siberia, are loved for their lush, full blossoms and variety of colors. Chrysanthemums, native to East Asia (China and Japan), are popular for their intricate petal arrangements and seasonal beauty. Asters, found across North America, Europe, and Asia, are charming daisy-like flowers often used in gardens. Violets, native to temperate Europe and Asia, are small, delicate flowers that symbolize modesty. Lavender, from the Mediterranean deserts, is famous for its fragrant purple spikes and calming scent. Irises, originating in the Rocky Mountains, Asia, and Europe, are admired for their striking, sword-like leaves and colorful blooms. Carnations, native to the Mediterranean and Middle East, are fragrant flowers often used in bouquets and decorations. Lotus flowers, growing in India, Southeast Asia, and the Nile River region, are revered for their beauty and spiritual symbolism. Camellias, from Eastern Asia (China, Japan, Korea), are evergreen shrubs with elegant, layered flowers. Finally, daffodils, native to the Mediterranean and European meadows, are cheerful spring flowers recognized by their trumpet-shaped blooms and bright yellow hues.',
      sizes: ['small', 'large'],
      reviews: [
        { author: 'Thomas Meg', comment: 'The plants are really good for breakfast bratha👍🙌', rating: 4.7 },
        { author: 'Jey Jey', comment: 'Not bad kid.. not bad', rating: 4.1 }
      ],
    },
    {
      id: 2,
      src: '/product-images/2.avif',
      name: 'Tulip – Central Asia, Anatolia',
      price: 144,
      category: 'Garden Plants',
      title: 'Roses – fragrant, romantic blooms from Mediterranean and Asia.',
      description: 'Roses are classic flowers originating from the Mediterranean and Asia, known for their fragrant blooms and romantic symbolism. Tulips, native to Central Asia and Anatolia, are famous for their bright, cup-shaped petals and vibrant spring colors. Lilies grow across the temperate Northern Hemisphere and are celebrated for their elegance and variety of patterns. Orchids, thriving in the Amazon Rainforest and Southeast Asia, are prized for their exotic shapes and rarity. Sunflowers, native to the North American plains, are recognized for their tall stems and large, sunny blooms. Hyacinths come from the Eastern Mediterranean and are known for their dense clusters of fragrant flowers. Peonies, originally from China and Siberia, are loved for their lush, full blossoms and variety of colors. Chrysanthemums, native to East Asia (China and Japan), are popular for their intricate petal arrangements and seasonal beauty. Asters, found across North America, Europe, and Asia, are charming daisy-like flowers often used in gardens. Violets, native to temperate Europe and Asia, are small, delicate flowers that symbolize modesty. Lavender, from the Mediterranean deserts, is famous for its fragrant purple spikes and calming scent. Irises, originating in the Rocky Mountains, Asia, and Europe, are admired for their striking, sword-like leaves and colorful blooms. Carnations, native to the Mediterranean and Middle East, are fragrant flowers often used in bouquets and decorations. Lotus flowers, growing in India, Southeast Asia, and the Nile River region, are revered for their beauty and spiritual symbolism. Camellias, from Eastern Asia (China, Japan, Korea), are evergreen shrubs with elegant, layered flowers. Finally, daffodils, native to the Mediterranean and European meadows, are cheerful spring flowers recognized by their trumpet-shaped blooms and bright yellow hues.',
      sizes: ['small', 'large'],
      reviews: [
        { author: 'Thomas Meg', comment: 'The plants are really good for breakfast bratha👍🙌', rating: 4.7 },
        { author: 'Jey Jey', comment: 'Not bad kid.. not bad', rating: 4.1 }
      ],
    },
    {
      id: 3,
      src: '/product-images/3.avif',
      name: 'Lily – Temperate Northern Hemisphere',
      price: 623,
      category: 'Garden Plants',
      title: 'Roses – fragrant, romantic blooms from Mediterranean and Asia.',
      description: 'Roses are classic flowers originating from the Mediterranean and Asia, known for their fragrant blooms and romantic symbolism. Tulips, native to Central Asia and Anatolia, are famous for their bright, cup-shaped petals and vibrant spring colors. Lilies grow across the temperate Northern Hemisphere and are celebrated for their elegance and variety of patterns. Orchids, thriving in the Amazon Rainforest and Southeast Asia, are prized for their exotic shapes and rarity. Sunflowers, native to the North American plains, are recognized for their tall stems and large, sunny blooms. Hyacinths come from the Eastern Mediterranean and are known for their dense clusters of fragrant flowers. Peonies, originally from China and Siberia, are loved for their lush, full blossoms and variety of colors. Chrysanthemums, native to East Asia (China and Japan), are popular for their intricate petal arrangements and seasonal beauty. Asters, found across North America, Europe, and Asia, are charming daisy-like flowers often used in gardens. Violets, native to temperate Europe and Asia, are small, delicate flowers that symbolize modesty. Lavender, from the Mediterranean deserts, is famous for its fragrant purple spikes and calming scent. Irises, originating in the Rocky Mountains, Asia, and Europe, are admired for their striking, sword-like leaves and colorful blooms. Carnations, native to the Mediterranean and Middle East, are fragrant flowers often used in bouquets and decorations. Lotus flowers, growing in India, Southeast Asia, and the Nile River region, are revered for their beauty and spiritual symbolism. Camellias, from Eastern Asia (China, Japan, Korea), are evergreen shrubs with elegant, layered flowers. Finally, daffodils, native to the Mediterranean and European meadows, are cheerful spring flowers recognized by their trumpet-shaped blooms and bright yellow hues.',
      sizes: ['small', 'large'],
      reviews: [
        { author: 'Thomas Meg', comment: 'The plants are really good for breakfast bratha👍🙌', rating: 4.7 },
        { author: 'Jey Jey', comment: 'Not bad kid.. not bad', rating: 4.1 }
      ],
    },
    {
      id: 4,
      src: '/product-images/4.avif',
      name: 'Orchid – Amazon Rainforest, Southeast Asia',
      price: 543,
      category: 'Home Plants',
      title: 'Roses – fragrant, romantic blooms from Mediterranean and Asia.',
      description: 'Roses are classic flowers originating from the Mediterranean and Asia, known for their fragrant blooms and romantic symbolism. Tulips, native to Central Asia and Anatolia, are famous for their bright, cup-shaped petals and vibrant spring colors. Lilies grow across the temperate Northern Hemisphere and are celebrated for their elegance and variety of patterns. Orchids, thriving in the Amazon Rainforest and Southeast Asia, are prized for their exotic shapes and rarity. Sunflowers, native to the North American plains, are recognized for their tall stems and large, sunny blooms. Hyacinths come from the Eastern Mediterranean and are known for their dense clusters of fragrant flowers. Peonies, originally from China and Siberia, are loved for their lush, full blossoms and variety of colors. Chrysanthemums, native to East Asia (China and Japan), are popular for their intricate petal arrangements and seasonal beauty. Asters, found across North America, Europe, and Asia, are charming daisy-like flowers often used in gardens. Violets, native to temperate Europe and Asia, are small, delicate flowers that symbolize modesty. Lavender, from the Mediterranean deserts, is famous for its fragrant purple spikes and calming scent. Irises, originating in the Rocky Mountains, Asia, and Europe, are admired for their striking, sword-like leaves and colorful blooms. Carnations, native to the Mediterranean and Middle East, are fragrant flowers often used in bouquets and decorations. Lotus flowers, growing in India, Southeast Asia, and the Nile River region, are revered for their beauty and spiritual symbolism. Camellias, from Eastern Asia (China, Japan, Korea), are evergreen shrubs with elegant, layered flowers. Finally, daffodils, native to the Mediterranean and European meadows, are cheerful spring flowers recognized by their trumpet-shaped blooms and bright yellow hues.',
      sizes: ['small', 'medium'],
      reviews: [
        { author: 'Thomas Meg', comment: 'The plants are really good for breakfast bratha👍🙌', rating: 4.7 },
        { author: 'Jey Jey', comment: 'Not bad kid.. not bad', rating: 4.1 }
      ],
    },
    {
      id: 5,
      src: '/product-images/5.avif',
      name: 'Sunflower – North American Plains',
      price: 123,
      category: 'Home Plants',
      title: 'Roses – fragrant, romantic blooms from Mediterranean and Asia.',
      description: 'Roses are classic flowers originating from the Mediterranean and Asia, known for their fragrant blooms and romantic symbolism. Tulips, native to Central Asia and Anatolia, are famous for their bright, cup-shaped petals and vibrant spring colors. Lilies grow across the temperate Northern Hemisphere and are celebrated for their elegance and variety of patterns. Orchids, thriving in the Amazon Rainforest and Southeast Asia, are prized for their exotic shapes and rarity. Sunflowers, native to the North American plains, are recognized for their tall stems and large, sunny blooms. Hyacinths come from the Eastern Mediterranean and are known for their dense clusters of fragrant flowers. Peonies, originally from China and Siberia, are loved for their lush, full blossoms and variety of colors. Chrysanthemums, native to East Asia (China and Japan), are popular for their intricate petal arrangements and seasonal beauty. Asters, found across North America, Europe, and Asia, are charming daisy-like flowers often used in gardens. Violets, native to temperate Europe and Asia, are small, delicate flowers that symbolize modesty. Lavender, from the Mediterranean deserts, is famous for its fragrant purple spikes and calming scent. Irises, originating in the Rocky Mountains, Asia, and Europe, are admired for their striking, sword-like leaves and colorful blooms. Carnations, native to the Mediterranean and Middle East, are fragrant flowers often used in bouquets and decorations. Lotus flowers, growing in India, Southeast Asia, and the Nile River region, are revered for their beauty and spiritual symbolism. Camellias, from Eastern Asia (China, Japan, Korea), are evergreen shrubs with elegant, layered flowers. Finally, daffodils, native to the Mediterranean and European meadows, are cheerful spring flowers recognized by their trumpet-shaped blooms and bright yellow hues.',
      sizes: ['small', 'medium'],
      reviews: [
        { author: 'Thomas Meg', comment: 'The plants are really good for breakfast bratha👍🙌', rating: 4.7 },
        { author: 'Jey Jey', comment: 'Not bad kid.. not bad', rating: 4.1 }
      ],
    },
    {
      id: 6,
      src: '/product-images/6.avif',
      name: 'Hyacinth – Eastern Mediterranean',
      price: 143,
      category: 'Home Plants',
      title: 'Roses – fragrant, romantic blooms from Mediterranean and Asia.',
      description: 'Roses are classic flowers originating from the Mediterranean and Asia, known for their fragrant blooms and romantic symbolism. Tulips, native to Central Asia and Anatolia, are famous for their bright, cup-shaped petals and vibrant spring colors. Lilies grow across the temperate Northern Hemisphere and are celebrated for their elegance and variety of patterns. Orchids, thriving in the Amazon Rainforest and Southeast Asia, are prized for their exotic shapes and rarity. Sunflowers, native to the North American plains, are recognized for their tall stems and large, sunny blooms. Hyacinths come from the Eastern Mediterranean and are known for their dense clusters of fragrant flowers. Peonies, originally from China and Siberia, are loved for their lush, full blossoms and variety of colors. Chrysanthemums, native to East Asia (China and Japan), are popular for their intricate petal arrangements and seasonal beauty. Asters, found across North America, Europe, and Asia, are charming daisy-like flowers often used in gardens. Violets, native to temperate Europe and Asia, are small, delicate flowers that symbolize modesty. Lavender, from the Mediterranean deserts, is famous for its fragrant purple spikes and calming scent. Irises, originating in the Rocky Mountains, Asia, and Europe, are admired for their striking, sword-like leaves and colorful blooms. Carnations, native to the Mediterranean and Middle East, are fragrant flowers often used in bouquets and decorations. Lotus flowers, growing in India, Southeast Asia, and the Nile River region, are revered for their beauty and spiritual symbolism. Camellias, from Eastern Asia (China, Japan, Korea), are evergreen shrubs with elegant, layered flowers. Finally, daffodils, native to the Mediterranean and European meadows, are cheerful spring flowers recognized by their trumpet-shaped blooms and bright yellow hues.',
      sizes: ['small', 'medium'],
      reviews: [
        { author: 'Thomas Meg', comment: 'The plants are really good for breakfast bratha👍🙌', rating: 4.7 },
        { author: 'Jey Jey', comment: 'Not bad kid.. not bad', rating: 4.1 }
      ],
    },
    {
      id: 7,
      src: '/product-images/7.avif',
      name: 'Peony – China, Siberia',
      price: 675,
      category: 'Potter Plants',
      title: 'Roses – fragrant, romantic blooms from Mediterranean and Asia.',
      description: 'Roses are classic flowers originating from the Mediterranean and Asia, known for their fragrant blooms and romantic symbolism. Tulips, native to Central Asia and Anatolia, are famous for their bright, cup-shaped petals and vibrant spring colors. Lilies grow across the temperate Northern Hemisphere and are celebrated for their elegance and variety of patterns. Orchids, thriving in the Amazon Rainforest and Southeast Asia, are prized for their exotic shapes and rarity. Sunflowers, native to the North American plains, are recognized for their tall stems and large, sunny blooms. Hyacinths come from the Eastern Mediterranean and are known for their dense clusters of fragrant flowers. Peonies, originally from China and Siberia, are loved for their lush, full blossoms and variety of colors. Chrysanthemums, native to East Asia (China and Japan), are popular for their intricate petal arrangements and seasonal beauty. Asters, found across North America, Europe, and Asia, are charming daisy-like flowers often used in gardens. Violets, native to temperate Europe and Asia, are small, delicate flowers that symbolize modesty. Lavender, from the Mediterranean deserts, is famous for its fragrant purple spikes and calming scent. Irises, originating in the Rocky Mountains, Asia, and Europe, are admired for their striking, sword-like leaves and colorful blooms. Carnations, native to the Mediterranean and Middle East, are fragrant flowers often used in bouquets and decorations. Lotus flowers, growing in India, Southeast Asia, and the Nile River region, are revered for their beauty and spiritual symbolism. Camellias, from Eastern Asia (China, Japan, Korea), are evergreen shrubs with elegant, layered flowers. Finally, daffodils, native to the Mediterranean and European meadows, are cheerful spring flowers recognized by their trumpet-shaped blooms and bright yellow hues.',
      sizes: ['medium', 'large'],
      reviews: [
        { author: 'Thomas Meg', comment: 'The plants are really good for breakfast bratha👍🙌', rating: 4.7 },
        { author: 'Jey Jey', comment: 'Not bad kid.. not bad', rating: 4.1 }
      ],
    },
    {
      id: 8,
      src: '/product-images/8.avif',
      name: 'Chrysanthemum – East Asia (China, Japan)',
      price: 234,
      category: 'Potter Plants',
      title: 'Roses – fragrant, romantic blooms from Mediterranean and Asia.',
      description: 'Roses are classic flowers originating from the Mediterranean and Asia, known for their fragrant blooms and romantic symbolism. Tulips, native to Central Asia and Anatolia, are famous for their bright, cup-shaped petals and vibrant spring colors. Lilies grow across the temperate Northern Hemisphere and are celebrated for their elegance and variety of patterns. Orchids, thriving in the Amazon Rainforest and Southeast Asia, are prized for their exotic shapes and rarity. Sunflowers, native to the North American plains, are recognized for their tall stems and large, sunny blooms. Hyacinths come from the Eastern Mediterranean and are known for their dense clusters of fragrant flowers. Peonies, originally from China and Siberia, are loved for their lush, full blossoms and variety of colors. Chrysanthemums, native to East Asia (China and Japan), are popular for their intricate petal arrangements and seasonal beauty. Asters, found across North America, Europe, and Asia, are charming daisy-like flowers often used in gardens. Violets, native to temperate Europe and Asia, are small, delicate flowers that symbolize modesty. Lavender, from the Mediterranean deserts, is famous for its fragrant purple spikes and calming scent. Irises, originating in the Rocky Mountains, Asia, and Europe, are admired for their striking, sword-like leaves and colorful blooms. Carnations, native to the Mediterranean and Middle East, are fragrant flowers often used in bouquets and decorations. Lotus flowers, growing in India, Southeast Asia, and the Nile River region, are revered for their beauty and spiritual symbolism. Camellias, from Eastern Asia (China, Japan, Korea), are evergreen shrubs with elegant, layered flowers. Finally, daffodils, native to the Mediterranean and European meadows, are cheerful spring flowers recognized by their trumpet-shaped blooms and bright yellow hues.',
      sizes: ['medium', 'large'],
      reviews: [
        { author: 'Thomas Meg', comment: 'The plants are really good for breakfast bratha👍🙌', rating: 4.7 },
        { author: 'Jey Jey', comment: 'Not bad kid.. not bad', rating: 4.1 }
      ],
    },
    {
      id: 9,
      src: '/product-images/9.avif',
      name: 'Aster – North America, Europe, Asia',
      price: 1700,
      category: 'Potter Plants',
      title: 'Roses – fragrant, romantic blooms from Mediterranean and Asia.',
      description: 'Roses are classic flowers originating from the Mediterranean and Asia, known for their fragrant blooms and romantic symbolism. Tulips, native to Central Asia and Anatolia, are famous for their bright, cup-shaped petals and vibrant spring colors. Lilies grow across the temperate Northern Hemisphere and are celebrated for their elegance and variety of patterns. Orchids, thriving in the Amazon Rainforest and Southeast Asia, are prized for their exotic shapes and rarity. Sunflowers, native to the North American plains, are recognized for their tall stems and large, sunny blooms. Hyacinths come from the Eastern Mediterranean and are known for their dense clusters of fragrant flowers. Peonies, originally from China and Siberia, are loved for their lush, full blossoms and variety of colors. Chrysanthemums, native to East Asia (China and Japan), are popular for their intricate petal arrangements and seasonal beauty. Asters, found across North America, Europe, and Asia, are charming daisy-like flowers often used in gardens. Violets, native to temperate Europe and Asia, are small, delicate flowers that symbolize modesty. Lavender, from the Mediterranean deserts, is famous for its fragrant purple spikes and calming scent. Irises, originating in the Rocky Mountains, Asia, and Europe, are admired for their striking, sword-like leaves and colorful blooms. Carnations, native to the Mediterranean and Middle East, are fragrant flowers often used in bouquets and decorations. Lotus flowers, growing in India, Southeast Asia, and the Nile River region, are revered for their beauty and spiritual symbolism. Camellias, from Eastern Asia (China, Japan, Korea), are evergreen shrubs with elegant, layered flowers. Finally, daffodils, native to the Mediterranean and European meadows, are cheerful spring flowers recognized by their trumpet-shaped blooms and bright yellow hues.',
      sizes: ['medium', 'large'],
      reviews: [
        { author: 'Thomas Meg', comment: 'The plants are really good for breakfast bratha👍🙌', rating: 4.7 },
        { author: 'Jey Jey', comment: 'Not bad kid.. not bad', rating: 4.1 }
      ],
    },
    {
      id: 10,
      src: '/product-images/10.avif',
      name: 'Violet – Temperate Europe and Asia',
      price: 512,
      category: 'Succulent Plants',
      title: 'Roses – fragrant, romantic blooms from Mediterranean and Asia.',
      description: 'Roses are classic flowers originating from the Mediterranean and Asia, known for their fragrant blooms and romantic symbolism. Tulips, native to Central Asia and Anatolia, are famous for their bright, cup-shaped petals and vibrant spring colors. Lilies grow across the temperate Northern Hemisphere and are celebrated for their elegance and variety of patterns. Orchids, thriving in the Amazon Rainforest and Southeast Asia, are prized for their exotic shapes and rarity. Sunflowers, native to the North American plains, are recognized for their tall stems and large, sunny blooms. Hyacinths come from the Eastern Mediterranean and are known for their dense clusters of fragrant flowers. Peonies, originally from China and Siberia, are loved for their lush, full blossoms and variety of colors. Chrysanthemums, native to East Asia (China and Japan), are popular for their intricate petal arrangements and seasonal beauty. Asters, found across North America, Europe, and Asia, are charming daisy-like flowers often used in gardens. Violets, native to temperate Europe and Asia, are small, delicate flowers that symbolize modesty. Lavender, from the Mediterranean deserts, is famous for its fragrant purple spikes and calming scent. Irises, originating in the Rocky Mountains, Asia, and Europe, are admired for their striking, sword-like leaves and colorful blooms. Carnations, native to the Mediterranean and Middle East, are fragrant flowers often used in bouquets and decorations. Lotus flowers, growing in India, Southeast Asia, and the Nile River region, are revered for their beauty and spiritual symbolism. Camellias, from Eastern Asia (China, Japan, Korea), are evergreen shrubs with elegant, layered flowers. Finally, daffodils, native to the Mediterranean and European meadows, are cheerful spring flowers recognized by their trumpet-shaped blooms and bright yellow hues.',
      sizes: ['small', 'medium'],
      reviews: [
        { author: 'Thomas Meg', comment: 'The plants are really good for breakfast bratha👍🙌', rating: 4.7 },
        { author: 'Jey Jey', comment: 'Not bad kid.. not bad', rating: 4.1 }
      ],
    },
    {
      id: 11,
      src: '/product-images/11.avif',
      name: 'Lavender – Mediterranean Deserts',
      price: 1352,
      category: 'Succulent Plants',
      title: 'Roses – fragrant, romantic blooms from Mediterranean and Asia.',
      description: 'Roses are classic flowers originating from the Mediterranean and Asia, known for their fragrant blooms and romantic symbolism. Tulips, native to Central Asia and Anatolia, are famous for their bright, cup-shaped petals and vibrant spring colors. Lilies grow across the temperate Northern Hemisphere and are celebrated for their elegance and variety of patterns. Orchids, thriving in the Amazon Rainforest and Southeast Asia, are prized for their exotic shapes and rarity. Sunflowers, native to the North American plains, are recognized for their tall stems and large, sunny blooms. Hyacinths come from the Eastern Mediterranean and are known for their dense clusters of fragrant flowers. Peonies, originally from China and Siberia, are loved for their lush, full blossoms and variety of colors. Chrysanthemums, native to East Asia (China and Japan), are popular for their intricate petal arrangements and seasonal beauty. Asters, found across North America, Europe, and Asia, are charming daisy-like flowers often used in gardens. Violets, native to temperate Europe and Asia, are small, delicate flowers that symbolize modesty. Lavender, from the Mediterranean deserts, is famous for its fragrant purple spikes and calming scent. Irises, originating in the Rocky Mountains, Asia, and Europe, are admired for their striking, sword-like leaves and colorful blooms. Carnations, native to the Mediterranean and Middle East, are fragrant flowers often used in bouquets and decorations. Lotus flowers, growing in India, Southeast Asia, and the Nile River region, are revered for their beauty and spiritual symbolism. Camellias, from Eastern Asia (China, Japan, Korea), are evergreen shrubs with elegant, layered flowers. Finally, daffodils, native to the Mediterranean and European meadows, are cheerful spring flowers recognized by their trumpet-shaped blooms and bright yellow hues.',
      sizes: ['small', 'medium'],
      reviews: [
        { author: 'Thomas Meg', comment: 'The plants are really good for breakfast bratha👍🙌', rating: 4.7 },
        { author: 'Jey Jey', comment: 'Not bad kid.. not bad', rating: 4.1 }
      ],
    },
    {
      id: 12,
      src: '/product-images/12.avif',
      name: 'Iris – Rocky Mountains, Asia, Europe',
      price: 133,
      category: 'Succulent Plants',
      title: 'Roses – fragrant, romantic blooms from Mediterranean and Asia.',
      description: 'Roses are classic flowers originating from the Mediterranean and Asia, known for their fragrant blooms and romantic symbolism. Tulips, native to Central Asia and Anatolia, are famous for their bright, cup-shaped petals and vibrant spring colors. Lilies grow across the temperate Northern Hemisphere and are celebrated for their elegance and variety of patterns. Orchids, thriving in the Amazon Rainforest and Southeast Asia, are prized for their exotic shapes and rarity. Sunflowers, native to the North American plains, are recognized for their tall stems and large, sunny blooms. Hyacinths come from the Eastern Mediterranean and are known for their dense clusters of fragrant flowers. Peonies, originally from China and Siberia, are loved for their lush, full blossoms and variety of colors. Chrysanthemums, native to East Asia (China and Japan), are popular for their intricate petal arrangements and seasonal beauty. Asters, found across North America, Europe, and Asia, are charming daisy-like flowers often used in gardens. Violets, native to temperate Europe and Asia, are small, delicate flowers that symbolize modesty. Lavender, from the Mediterranean deserts, is famous for its fragrant purple spikes and calming scent. Irises, originating in the Rocky Mountains, Asia, and Europe, are admired for their striking, sword-like leaves and colorful blooms. Carnations, native to the Mediterranean and Middle East, are fragrant flowers often used in bouquets and decorations. Lotus flowers, growing in India, Southeast Asia, and the Nile River region, are revered for their beauty and spiritual symbolism. Camellias, from Eastern Asia (China, Japan, Korea), are evergreen shrubs with elegant, layered flowers. Finally, daffodils, native to the Mediterranean and European meadows, are cheerful spring flowers recognized by their trumpet-shaped blooms and bright yellow hues.',
      sizes: ['small', 'medium'],
      reviews: [
        { author: 'Thomas Meg', comment: 'The plants are really good for breakfast bratha👍🙌', rating: 4.7 },
        { author: 'Jey Jey', comment: 'Not bad kid.. not bad', rating: 4.1 }
      ],
    },
    {
      id: 13,
      src: '/product-images/13.avif',
      name: 'Carnation – Mediterranean, Middle East',
      price: 623,
      category: 'Trerrarium Plants',
      title: 'Roses – fragrant, romantic blooms from Mediterranean and Asia.',
      description: 'Roses are classic flowers originating from the Mediterranean and Asia, known for their fragrant blooms and romantic symbolism. Tulips, native to Central Asia and Anatolia, are famous for their bright, cup-shaped petals and vibrant spring colors. Lilies grow across the temperate Northern Hemisphere and are celebrated for their elegance and variety of patterns. Orchids, thriving in the Amazon Rainforest and Southeast Asia, are prized for their exotic shapes and rarity. Sunflowers, native to the North American plains, are recognized for their tall stems and large, sunny blooms. Hyacinths come from the Eastern Mediterranean and are known for their dense clusters of fragrant flowers. Peonies, originally from China and Siberia, are loved for their lush, full blossoms and variety of colors. Chrysanthemums, native to East Asia (China and Japan), are popular for their intricate petal arrangements and seasonal beauty. Asters, found across North America, Europe, and Asia, are charming daisy-like flowers often used in gardens. Violets, native to temperate Europe and Asia, are small, delicate flowers that symbolize modesty. Lavender, from the Mediterranean deserts, is famous for its fragrant purple spikes and calming scent. Irises, originating in the Rocky Mountains, Asia, and Europe, are admired for their striking, sword-like leaves and colorful blooms. Carnations, native to the Mediterranean and Middle East, are fragrant flowers often used in bouquets and decorations. Lotus flowers, growing in India, Southeast Asia, and the Nile River region, are revered for their beauty and spiritual symbolism. Camellias, from Eastern Asia (China, Japan, Korea), are evergreen shrubs with elegant, layered flowers. Finally, daffodils, native to the Mediterranean and European meadows, are cheerful spring flowers recognized by their trumpet-shaped blooms and bright yellow hues.',
      sizes: ['medium', 'large'],
      reviews: [
        { author: 'Thomas Meg', comment: 'The plants are really good for breakfast bratha👍🙌', rating: 4.7 },
        { author: 'Jey Jey', comment: 'Not bad kid.. not bad', rating: 4.1 }
      ],
    },
    {
      id: 14,
      src: '/product-images/14.avif',
      name: 'Lotus – India, Southeast Asia, Nile River region',
      price: 1273,
      category: 'Trerrarium Plants',
      title: 'Roses – fragrant, romantic blooms from Mediterranean and Asia.',
      description: 'Roses are classic flowers originating from the Mediterranean and Asia, known for their fragrant blooms and romantic symbolism. Tulips, native to Central Asia and Anatolia, are famous for their bright, cup-shaped petals and vibrant spring colors. Lilies grow across the temperate Northern Hemisphere and are celebrated for their elegance and variety of patterns. Orchids, thriving in the Amazon Rainforest and Southeast Asia, are prized for their exotic shapes and rarity. Sunflowers, native to the North American plains, are recognized for their tall stems and large, sunny blooms. Hyacinths come from the Eastern Mediterranean and are known for their dense clusters of fragrant flowers. Peonies, originally from China and Siberia, are loved for their lush, full blossoms and variety of colors. Chrysanthemums, native to East Asia (China and Japan), are popular for their intricate petal arrangements and seasonal beauty. Asters, found across North America, Europe, and Asia, are charming daisy-like flowers often used in gardens. Violets, native to temperate Europe and Asia, are small, delicate flowers that symbolize modesty. Lavender, from the Mediterranean deserts, is famous for its fragrant purple spikes and calming scent. Irises, originating in the Rocky Mountains, Asia, and Europe, are admired for their striking, sword-like leaves and colorful blooms. Carnations, native to the Mediterranean and Middle East, are fragrant flowers often used in bouquets and decorations. Lotus flowers, growing in India, Southeast Asia, and the Nile River region, are revered for their beauty and spiritual symbolism. Camellias, from Eastern Asia (China, Japan, Korea), are evergreen shrubs with elegant, layered flowers. Finally, daffodils, native to the Mediterranean and European meadows, are cheerful spring flowers recognized by their trumpet-shaped blooms and bright yellow hues.',
      sizes: ['medium', 'large'],
      reviews: [
        { author: 'Thomas Meg', comment: 'The plants are really good for breakfast bratha👍🙌', rating: 4.7 },
        { author: 'Jey Jey', comment: 'Not bad kid.. not bad', rating: 4.1 }
      ],
    },
    {
      id: 15,
      src: '/product-images/15.avif',
      name: 'Camellia – Eastern Asia (China, Japan, Korea)',
      price: 1163,
      category: 'Trerrarium Plants',
      title: 'Roses – fragrant, romantic blooms from Mediterranean and Asia.',
      description: 'Roses are classic flowers originating from the Mediterranean and Asia, known for their fragrant blooms and romantic symbolism. Tulips, native to Central Asia and Anatolia, are famous for their bright, cup-shaped petals and vibrant spring colors. Lilies grow across the temperate Northern Hemisphere and are celebrated for their elegance and variety of patterns. Orchids, thriving in the Amazon Rainforest and Southeast Asia, are prized for their exotic shapes and rarity. Sunflowers, native to the North American plains, are recognized for their tall stems and large, sunny blooms. Hyacinths come from the Eastern Mediterranean and are known for their dense clusters of fragrant flowers. Peonies, originally from China and Siberia, are loved for their lush, full blossoms and variety of colors. Chrysanthemums, native to East Asia (China and Japan), are popular for their intricate petal arrangements and seasonal beauty. Asters, found across North America, Europe, and Asia, are charming daisy-like flowers often used in gardens. Violets, native to temperate Europe and Asia, are small, delicate flowers that symbolize modesty. Lavender, from the Mediterranean deserts, is famous for its fragrant purple spikes and calming scent. Irises, originating in the Rocky Mountains, Asia, and Europe, are admired for their striking, sword-like leaves and colorful blooms. Carnations, native to the Mediterranean and Middle East, are fragrant flowers often used in bouquets and decorations. Lotus flowers, growing in India, Southeast Asia, and the Nile River region, are revered for their beauty and spiritual symbolism. Camellias, from Eastern Asia (China, Japan, Korea), are evergreen shrubs with elegant, layered flowers. Finally, daffodils, native to the Mediterranean and European meadows, are cheerful spring flowers recognized by their trumpet-shaped blooms and bright yellow hues.',
      sizes: ['medium', 'large'],
      reviews: [
        { author: 'Thomas Meg', comment: 'The plants are really good for breakfast bratha👍🙌', rating: 4.7 },
        { author: 'Jey Jey', comment: 'Not bad kid.. not bad', rating: 4.1 }
      ],
    },
  ])

  const getProducts = computed(() =>
    products.value.map((product, index) => {
      if (index % 2 === 0) {
        const oldPrice = product.price;

        return {
          ...product,
          price: oldPrice * 0.8,
          discountPrice: {
            oldPrice,
            discount: 20
          }
        };
      }
      return product;
    })
  );

  const getAverageRating = (reviews) => {
    const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
    const averageRating = totalRating / reviews.length;
    return averageRating.toFixed(1);
  };

  const addToReviews = (productId, review) => {
    const product = products.value.find((product) => product.id === productId);
    if (product) {
      product.reviews.push(review);
    }
  };

  return { getProducts, getAverageRating, addToReviews };
})