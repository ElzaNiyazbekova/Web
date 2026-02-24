import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card.component';
 

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  })
  
export class ProductListComponent{
  products: Product[] = [
    {
      id: 1,
      name: 'Gold Necklace 585',
      description: 'Elegant 585 gold necklace with minimalist design. Perfect for everyday wear and special occasions.',
      price: 25000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1c/ha0/85066296000542.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h1c/ha0/85066296000542.jpg?format=gallery-medium&v=1',
        'https://resources.cdn-kaspi.kz/img/m/p/h1c/ha0/85066296000542.jpg?format=gallery-medium&v=2',
        'https://resources.cdn-kaspi.kz/img/m/p/h1c/ha0/85066296000542.jpg?format=gallery-medium&v=3'
      ]
,
      link: 'https://kaspi.kz/shop/p/tsep-stainless-steel-dlina-45-sm-meditsinskaja-stal-titan-steklo-116354963/?c=750000000'
    },
    {
      id: 2,
      name: 'Silver Ring with Zircon',
      description: '925 silver ring decorated with sparkling zircon stones. Modern and stylish design.',
      price: 12000,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb3/h4b/85706482024478.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hb3/h4b/85706482024478.jpg?format=gallery-medium&v=1',
        'https://resources.cdn-kaspi.kz/img/m/p/he4/hd4/85706482090014.jpg?format=gallery-medium&v=2',
        'https://resources.cdn-kaspi.kz/img/m/p/he4/hd4/85706482090014.jpg?format=gallery-medium&v=3'
      ],
      link: 'https://kaspi.kz/shop/p/kol-tso-razmer-reguliruemyi-bizhuternyi-splav-steklo-strazy-118304499/?c=750000000'
    },
    {
      id: 3,
      name: 'Gold Stud Earrings',
      description: 'Classic gold stud earrings made of 585 gold. Timeless accessory for any outfit.',
      price: 18000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h9a/hc3/85471227641886.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h9a/hc3/85471227641886.jpg?format=gallery-medium&v=1',
        'https://resources.cdn-kaspi.kz/img/m/p/hb9/h5a/85471227707422.jpg?format=gallery-medium&v=2',
        'https://resources.cdn-kaspi.kz/img/m/p/hb9/h5a/85471227707422.jpg?format=gallery-medium&v=3'
      ],

      link: 'https://kaspi.kz/shop/p/ser-gi-bright-heart-bizhuternyi-splav-bez-vstavok-117557472/?c=750000000'
    },
    {
      id: 4,
      name: 'Silver Bracelet',
      description: 'Elegant silver bracelet made of 925 sterling silver. Adjustable and comfortable.',
      price: 15000,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h21/hfb/86155524571166.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h21/hfb/86155524571166.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hec/h1f/86155524702238.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hb7/hff/86155524767774.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/30207732-299819396-dlina-20-sm-stal-serebro-bez-vstavok-119923235/?c=750000000'
    },
    {
      id: 5,
      name: 'Diamond Pendant',
      description: 'Luxury pendant with natural diamond set in 585 gold. A perfect gift.',
      price: 95000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb6/h17/85932012666910.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hb6/h17/85932012666910.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h72/hbe/85932012732446.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hba/h2c/85932012863518.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/tsep-dlina-50-sm-bizhuternyi-splav-bez-vstavok-119060720/?c=750000000'
    },
    {
      id: 6,
      name: 'Pearl Necklace',
      description: 'Classic pearl necklace with natural pearls. Elegant and feminine accessory.',
      price: 30000,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h46/h18/85859530637342.jpg?format=gallery-medium',
      images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h46/h18/85859530637342.jpg?format=gallery-medium&v=1',
      'https://resources.cdn-kaspi.kz/img/m/p/h57/h94/85859530702878.jpg?format=gallery-medium&v=2',
      'https://resources.cdn-kaspi.kz/img/m/p/h57/h94/85859530702878.jpg?format=gallery-medium&v=3'
    ],
      link: 'https://kaspi.kz/shop/p/tsep-zoloto-001-dlina-40-sm-bizhuternyi-splav-iskusstvennyi-zhemchug-zhemchug-118813080/?c=750000000'
    },
    {
      id: 7,
      name: 'Gold Bracelet 585',
      description: 'Stylish gold bracelet crafted from 585 gold. Durable and fashionable.',
      price: 42000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h2e/h50/84810647928862.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf2/hf5/84810648059934.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h2e/h50/84810647928862.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hae/h71/84810648453150.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/7272005-738195-dlina-16-sm-bizhuternyi-splav-strazy-115733751/?c=750000000'
    },
    {
      id: 8,
      name: 'Silver Hoop Earrings',
      description: 'Modern silver hoop earrings made from 925 silver. Lightweight and comfortable.',
      price: 10000,
      rating: 4.4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h60/hb8/81270774562846.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h60/hb8/81270774562846.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h51/h16/81270774824990.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h08/hdf/81270775283742.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/ser-gi-lepestki-i-zhemchug-bizhuternyi-splav-iskusstvennyi-zhemchug-110853992/?c=750000000'
    },
    {
      id: 9,
      name: 'Gold Engagement Ring',
      description: 'Elegant engagement ring with cubic zirconia stone set in 585 gold.',
      price: 65000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p97/pc6/8630167.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p97/pc6/8630167.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p7b/pc6/8630168.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p5f/pc6/8630169.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/kol-tso-billiza-razmer-reguliruemyi-stal-titan-bez-vstavok-130129000/?c=750000000'
    },
    {
      id: 10,
      name: 'Charm Bracelet',
      description: 'Trendy charm bracelet with decorative pendants. Adjustable size.',
      price: 14000,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h8d/hd7/86146518220830.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h8d/hd7/86146518220830.jpg?format=gallery-medium&v=1',
        'https://resources.cdn-kaspi.kz/img/m/p/h8d/hd7/86146518220830.jpg?format=gallery-medium&v=2',
        'https://resources.cdn-kaspi.kz/img/m/p/h8d/hd7/86146518220830.jpg?format=gallery-medium&v=3'
      ],

      link: 'https://kaspi.kz/shop/p/china-dlina-21-sm-bizhuternyi-splav-bez-vstavok-119890753/?c=750000000'
    }
  ];
}