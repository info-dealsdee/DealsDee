import type { CmsConfig } from 'decap-cms-core';

const config: CmsConfig = {
  backend: {
    name: 'github',
    repo: 'info-dealsdee/DealsDee', // GitHub repository path
    branch: 'main',
    base_url: 'https://api.github.com',
  },
  media_folder: 'public/images/uploads', // Where to upload images
  public_folder: '/images/uploads', // The public URL for uploaded images
  collections: [
    {
      name: 'reviews',
      label: 'รีวิว (Reviews)',
      folder: 'app/content/reviews', // The folder where article files are stored
      create: true,
      slug: '{{slug}}',
      extension: 'mdx',
      format: 'frontmatter',
      fields: [
        { 
          label: 'หัวข้อ (Title)', 
          name: 'title', 
          widget: 'string',
          required: true
        },
        { 
          label: 'Slug (URL)', 
          name: 'slug', 
          widget: 'string',
          required: true,
          pattern: ['^[a-z0-9-]+$', 'Slug can only contain lowercase letters, numbers, and hyphens']
        },
        { 
          label: 'วันที่เผยแพร่ (Publish Date)', 
          name: 'date', 
          widget: 'datetime',
          required: true,
          default: '',
          format: 'YYYY-MM-DD'
        },
        { 
          label: 'ผู้เขียน (Author)', 
          name: 'author', 
          widget: 'string', 
          default: 'Dealsdee Team',
          required: true
        },
        { 
          label: 'หมวดหมู่ (Category)', 
          name: 'category', 
          widget: 'select',
          options: [
            'Office Chairs',
            'Monitors',
            'Desks',
            'Keyboards',
            'Mouse',
            'Accessories',
            'Smart Home'
          ],
          required: true
        },
        { 
          label: 'รูปภาพหลัก (Featured Image)', 
          name: 'featuredImage', 
          widget: 'image',
          required: true
        },
        { 
          label: 'คะแนน (Score)', 
          name: 'score', 
          widget: 'number', 
          value_type: 'float',
          min: 1,
          max: 10,
          step: 0.1,
          required: true
        },
        { 
          label: 'ข้อดี (Pros)', 
          name: 'pros', 
          widget: 'list', 
          allow_add: true,
          collapsed: false,
          field: { label: 'ข้อดี', name: 'pro', widget: 'string' }
        },
        { 
          label: 'ข้อเสีย (Cons)', 
          name: 'cons', 
          widget: 'list', 
          allow_add: true,
          collapsed: false,
          field: { label: 'ข้อเสีย', name: 'con', widget: 'string' }
        },
        {
          label: 'ลิงก์ Affiliate (Affiliate Links)',
          name: 'affiliate',
          widget: 'object',
          collapsed: false,
          fields: [
            { 
              label: 'Amazon', 
              name: 'amazon', 
              widget: 'string', 
              required: false,
              default: ''
            },
            { 
              label: 'Shopee', 
              name: 'shopee', 
              widget: 'string', 
              required: false,
              default: ''
            },
            { 
              label: 'Lazada', 
              name: 'lazada', 
              widget: 'string', 
              required: false,
              default: ''
            },
            { 
              label: 'Official Website', 
              name: 'manufacturer', 
              widget: 'string', 
              required: false,
              default: ''
            }
          ]
        },
        { 
          label: 'เนื้อหาบทความ (Article Content)', 
          name: 'body', 
          widget: 'markdown',
          required: true
        },
      ],
    },
    {
      name: 'comparisons',
      label: 'บทความเปรียบเทียบ (Comparisons)',
      folder: 'app/content/comparisons',
      create: true,
      slug: '{{slug}}',
      extension: 'mdx',
      format: 'frontmatter',
      fields: [
        { 
          label: 'หัวข้อ (Title)', 
          name: 'title', 
          widget: 'string',
          required: true
        },
        { 
          label: 'Slug (URL)', 
          name: 'slug', 
          widget: 'string',
          required: true,
          pattern: ['^[a-z0-9-]+$', 'Slug can only contain lowercase letters, numbers, and hyphens']
        },
        { 
          label: 'วันที่เผยแพร่ (Publish Date)', 
          name: 'date', 
          widget: 'datetime',
          required: true,
          default: '',
          format: 'YYYY-MM-DD'
        },
        { 
          label: 'ผู้เขียน (Author)', 
          name: 'author', 
          widget: 'string', 
          default: 'Dealsdee Team',
          required: true
        },
        { 
          label: 'หมวดหมู่ (Category)', 
          name: 'category', 
          widget: 'select',
          options: [
            'Office Chairs',
            'Monitors',
            'Desks',
            'Technology',
            'General'
          ],
          required: true
        },
        { 
          label: 'รูปภาพหลัก (Featured Image)', 
          name: 'featuredImage', 
          widget: 'image',
          required: true
        },
        { 
          label: 'คะแนน (Score)', 
          name: 'score', 
          widget: 'number', 
          value_type: 'float',
          min: 1,
          max: 10,
          step: 0.1,
          required: true
        },
        { 
          label: 'เนื้อหาบทความ (Article Content)', 
          name: 'body', 
          widget: 'markdown',
          required: true
        },
      ],
    }
  ],
};

export default config;