import type { Locale } from '@/lib/i18n';

export type VisibilityLayer = {
  key: 'SEO' | 'AIO' | 'GEO';
  icon: string;
  color: 'navy' | 'coral' | 'success';
  where: string;
  meaning: string;
  goal: string;
};

export type PricingPlan = {
  name: string;
  price: string;
  recommended?: string;
  bestFor: string;
  content: string;
  entity: string;
  tracking: string;
  reporting: string;
};

export type LandingCopy = {
  locale: Locale;
  meta: { title: string; description: string };
  nav: {
    brand: string;
    links: { label: string; href: string }[];
    cta: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    description: string;
    cta: string;
    layerLabels: { where: string; meaning: string; goal: string };
    layers: VisibilityLayer[];
    close: string;
  };
  whyNow: {
    eyebrow: string;
    title: string;
    items: { stat: string; title: string; description: string; source?: string }[];
    close: string;
  };
  problem: {
    eyebrow: string;
    title: string;
    items: { icon: string; title: string; description: string }[];
    close: string;
  };
  solution: {
    eyebrow: string;
    title: string;
    intro: string;
    items: { number: string; title: string; description: string }[];
  };
  approach: {
    eyebrow: string;
    title: string;
    intro: string;
    pillars: { number: string; icon: string; title: string; description: string; tags: string[] }[];
  };
  capabilities: {
    eyebrow: string;
    title: string;
    intro: string;
    areaLabel: string;
    descriptionLabel: string;
    items: { icon: string; area: string; description: string }[];
  };
  process: {
    eyebrow: string;
    title: string;
    intro: string;
    items: { number: string; title: string; timing: string; description: string }[];
  };
  caseStudy: {
    eyebrow: string;
    title: string;
    category: string;
    location: string;
    description: string;
    results: { value: string; label: string }[];
    timeframe: string;
    disclaimer: string;
  };
  pricing: {
    eyebrow: string;
    title: string;
    intro: string;
    labels: {
      bestFor: string;
      content: string;
      entity: string;
      tracking: string;
      reporting: string;
      choose: string;
    };
    plans: PricingPlan[];
    note: string;
  };
  commitments: {
    eyebrow: string;
    title: string;
    items: { icon: string; title: string; description: string }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    bullets: string[];
    call: string;
    email: string;
    name: string;
    phone: string;
    emailAddress: string;
    phoneHref: string;
    emailHref: string;
  };
  footer: { copyright: string; note: string; backToTop: string };
  ui: {
    visibilityMap: string;
    live: string;
    visibilityAssessment: string;
    secondaryCta: string;
    switchLang: string;
  };
};

const shared = {
  navBrand: 'GEO PRO',
  contact: {
    name: process.env.CONTACT_NAME || '[Tên người liên hệ]',
    phone: process.env.CONTACT_PHONE || '[SĐT]',
    emailAddress: process.env.CONTACT_EMAIL || '[Email]',
    phoneHref: `tel:${process.env.CONTACT_PHONE_HREF || ''}`,
    emailHref: `mailto:${process.env.CONTACT_EMAIL_HREF || ''}`,
  },
};

const vi: LandingCopy = {
  locale: 'vi',
  meta: {
    title: 'GEO Pro — Hiện diện thương hiệu trong kỷ nguyên AI',
    description:
      'GEO Pro giúp doanh nghiệp được tìm thấy, trích dẫn và lựa chọn đồng thời trên SEO, Google AI Overview và các nền tảng AI.',
  },
  nav: {
    brand: shared.navBrand,
    links: [
      { label: 'Bài toán', href: '#bai-toan' },
      { label: 'Giải pháp', href: '#giai-phap' },
      { label: 'Quy trình', href: '#quy-trinh' },
      { label: 'Bảng giá', href: '#bang-gia' },
      { label: 'Liên hệ', href: '#lien-he' },
    ],
    cta: 'Khảo sát miễn phí',
    openMenu: 'Mở menu',
    closeMenu: 'Đóng menu',
  },
  hero: {
    eyebrow: 'AI VISIBILITY · SEO · AIO · GEO',
    title: 'Ba tầng hiện diện doanh nghiệp',
    titleAccent: 'cần chiếm lĩnh',
    description:
      'Tối ưu để thương hiệu không chỉ được tìm thấy trên Google, mà còn được AI hiểu đúng, trích dẫn và chủ động đề xuất.',
    cta: 'Khảo sát AI Visibility miễn phí',
    layerLabels: {
      where: 'Xuất hiện ở đâu',
      meaning: 'Hiểu đơn giản',
      goal: 'Mục tiêu',
    },
    layers: [
      {
        key: 'SEO',
        icon: 'tabler:search',
        color: 'navy',
        where: 'Google Search',
        meaning: 'Website được xếp hạng cao',
        goal: 'Được tìm thấy',
      },
      {
        key: 'AIO',
        icon: 'tabler:sparkles',
        color: 'coral',
        where: 'Google AI Overview',
        meaning: 'Nội dung được Google AI tổng hợp và trích dẫn',
        goal: 'Được trích xuất',
      },
      {
        key: 'GEO',
        icon: 'tabler:message-chatbot',
        color: 'success',
        where: 'ChatGPT, Gemini, Perplexity, Claude',
        meaning: 'Thương hiệu được AI nhắc đến hoặc đề xuất',
        goal: 'Được nhắc đến và lựa chọn',
      },
    ],
    close:
      'Trong kỷ nguyên AI, hành vi tìm kiếm đã thay đổi. Thương hiệu muốn được tìm thấy và lựa chọn cần hiện diện đồng thời trên cả SEO, AIO và GEO.',
  },
  whyNow: {
    eyebrow: 'Tại sao là bây giờ?',
    title: 'Khoảng cách hiện diện trên AI đang mở rộng từng ngày',
    items: [
      {
        stat: '2,5 tỷ',
        title: 'Quy mô đã đủ lớn để không thể bỏ qua',
        description:
          'Google AI Overview đã đạt 2,5 tỷ người dùng hoạt động mỗi tháng, ngang tầm quy mô của chính Google Search.',
        source: 'Google I/O 2026 · 05/2026',
      },
      {
        stat: '− gần 50%',
        title: 'Click đang chảy đi, có số liệu rõ ràng',
        description:
          'Khi AI Overview xuất hiện, click vào kết quả tự nhiên giảm gần một nửa. Khi thương hiệu được AI trích dẫn, click có thể tăng tới 35%.',
      },
      {
        stat: '−49%',
        title: 'Tên tuổi lớn cũng mất traffic thật',
        description:
          'Chegg ghi nhận traffic người dùng miễn phí giảm 49% chỉ trong một tháng khi AI trả lời trực tiếp thay vì dẫn khách về website.',
        source: 'Chegg · đầu năm 2025',
      },
      {
        stat: 'Top 3',
        title: 'Ngoài Top 3, gần như không tồn tại trong mắt AI',
        description:
          'Với doanh nghiệp có địa điểm thật, chỉ nhóm Top 3 Local Pack được AI nhắc tới đáng kể; ngoài Top 3 gần như bằng 0.',
      },
    ],
    close:
      "Đây không còn là câu chuyện ‘có thì tốt’. Càng chậm bắt đầu, doanh nghiệp càng khó thu hẹp khoảng cách với đối thủ.",
  },
  problem: {
    eyebrow: 'Bài toán của doanh nghiệp',
    title: 'Có thứ hạng chưa chắc đã có mặt trong câu trả lời của AI',
    items: [
      {
        icon: 'tabler:message-off',
        title: 'Không được nhắc đến',
        description:
          'Website có thứ hạng nhưng thương hiệu vẫn có thể vắng mặt khi khách hàng hỏi AI.',
      },
      {
        icon: 'tabler:focus-2',
        title: 'Không được hiểu đúng',
        description:
          'Thông tin thiếu nhất quán khiến AI khó xác minh doanh nghiệp, sản phẩm và thế mạnh thương hiệu.',
      },
      {
        icon: 'tabler:chart-dots-3',
        title: 'Không hiện diện đồng đều trên 3 tầng',
        description:
          'Doanh nghiệp có thể mạnh ở SEO nhưng yếu ở AIO hoặc GEO vì mỗi tầng cần cách đo lường và tối ưu khác nhau.',
      },
    ],
    close:
      'Khi khách hàng chuyển từ tìm kiếm sang hỏi AI, thương hiệu không xuất hiện đồng nghĩa cơ hội được cân nhắc đang rơi vào tay đối thủ.',
  },
  solution: {
    eyebrow: 'Giải pháp GEO Pro',
    title: 'Biến hiện diện trên AI thành lợi thế kinh doanh',
    intro:
      'Một chiến lược xuyên suốt từ nền tảng kỹ thuật, nội dung đến tín hiệu thương hiệu để doanh nghiệp được tìm thấy và lựa chọn.',
    items: [
      {
        number: '01',
        title: 'Mở rộng cơ hội doanh thu',
        description:
          'Chiếm lĩnh các truy vấn có giá trị thương mại cao, tiếp cận khách hàng ngay khi họ tìm kiếm, so sánh và ra quyết định.',
      },
      {
        number: '02',
        title: 'Gia tăng lợi thế cạnh tranh',
        description:
          'Tăng hiện diện trong câu trả lời AI, hạn chế đối thủ chiếm ưu thế trên Google AI, ChatGPT, Gemini và các nền tảng mới.',
      },
      {
        number: '03',
        title: 'Xây dựng tài sản thương hiệu dài hạn',
        description:
          'Tích luỹ uy tín với AI thông qua nội dung, thực thể và tín hiệu tin cậy — lợi thế càng làm sớm càng khó bị thu hẹp.',
      },
    ],
  },
  approach: {
    eyebrow: 'Phương pháp triển khai',
    title: 'Hai trụ cột chiến lược xuyên suốt SEO, AIO và GEO',
    intro:
      'Kết hợp nền tảng có thể được máy đọc hiểu với một thực thể thương hiệu nhất quán, đáng tin cậy.',
    pillars: [
      {
        number: '01',
        icon: 'tabler:braces',
        title: 'Số hoá sản phẩm',
        description:
          'Schema, tốc độ tải và cấu trúc trang tạo nền tảng kỹ thuật chung. Nội dung answer-first giúp AIO dễ trích xuất và GEO dễ trích dẫn.',
        tags: ['Structured data', 'Core Web Vitals', 'Answer-first content'],
      },
      {
        number: '02',
        icon: 'tabler:affiliate',
        title: 'Xây thực thể thương hiệu',
        description:
          'Đồng bộ website, Google Business Profile, Wikidata và mạng xã hội; chủ động xây lượt nhắc đến và đánh giá tốt từ nguồn uy tín.',
        tags: ['Knowledge Graph', 'Entity consistency', 'Trusted mentions'],
      },
    ],
  },
  capabilities: {
    eyebrow: 'Năng lực triển khai',
    title: 'Kiểm soát toàn bộ hành trình AI Visibility',
    intro: 'Từ phân tích hiện trạng, thực thi đến đo lường trên nhiều nền tảng AI.',
    areaLabel: 'Hạng mục',
    descriptionLabel: 'Mô tả',
    items: [
      {
        icon: 'tabler:zoom-scan',
        area: 'Phân tích thương hiệu & đối thủ',
        description: 'Ai đang được AI nhắc tên cho câu hỏi liên quan ngành của bạn, và vì sao.',
      },
      {
        icon: 'tabler:world-code',
        area: 'Audit kỹ thuật & khả năng đọc của AI',
        description: 'Tốc độ tải, schema và khả năng để AI tự động đọc website.',
      },
      {
        icon: 'tabler:file-pencil',
        area: 'Xây dựng nội dung chuyên môn',
        description: 'Sản xuất qua quy trình nhiều bước kiểm duyệt, không xuất bản thẳng bản nháp AI.',
      },
      {
        icon: 'tabler:circles-relation',
        area: 'Tối ưu thực thể thương hiệu',
        description: 'Schema, Google Business, Wikidata và liên kết mạng xã hội nhất quán.',
      },
      {
        icon: 'tabler:radar-2',
        area: 'Theo dõi mức độ xuất hiện trên AI',
        description: 'Đo trên ChatGPT, Gemini, Perplexity, Claude và AI Overview.',
      },
    ],
  },
  process: {
    eyebrow: 'Quy trình triển khai',
    title: 'Năm bước rõ ràng, đo được và cải tiến liên tục',
    intro: 'Mỗi chu kỳ bắt đầu bằng dữ liệu thật và kết thúc bằng quyết định tối ưu cụ thể.',
    items: [
      {
        number: '01',
        title: 'Khảo sát hiện trạng',
        timing: 'Tuần 1',
        description: 'Audit kỹ thuật, chạy baseline AI Visibility bằng bộ câu hỏi thật và phân tích đối thủ.',
      },
      {
        number: '02',
        title: 'Xây dựng chiến lược',
        timing: 'Tuần 1–2',
        description: 'Xác định chủ đề, từ khoá ưu tiên và kênh phù hợp với hành vi khách hàng thật.',
      },
      {
        number: '03',
        title: 'Thực thi',
        timing: 'Liên tục',
        description: 'Sản xuất nội dung có kiểm duyệt, khai báo dữ liệu có cấu trúc và phân phối đúng kênh.',
      },
      {
        number: '04',
        title: 'Đo lường',
        timing: 'Hàng tháng / 2 tuần',
        description: 'Chạy lại bộ câu hỏi baseline, theo dõi thứ hạng, lượt nhắc đến và traffic.',
      },
      {
        number: '05',
        title: 'Tối ưu liên tục',
        timing: 'Theo chu kỳ',
        description: 'Điều chỉnh chiến lược dựa trên dữ liệu thực tế của chu kỳ trước.',
      },
    ],
  },
  caseStudy: {
    eyebrow: 'Dự án tiêu biểu',
    title: 'Tanuki Art Supplies',
    category: 'Vật liệu mỹ thuật độc lập',
    location: 'Hà Nội, Việt Nam',
    description:
      'Sau khi chuẩn hoá nền tảng kỹ thuật và thông tin thương hiệu, Tanuki cải thiện rõ rệt khả năng được tìm thấy trong trải nghiệm tìm kiếm bằng AI.',
    results: [
      { value: '#1', label: 'Danh mục cao cấp trên Google AI Mode' },
      { value: '#1', label: 'Trong một câu trả lời AI dạng bản đồ' },
    ],
    timeframe: 'Ghi nhận trong 1–3 tháng · 07/2026',
    disclaimer: 'Đo tại một thời điểm và có thể thay đổi; không phải lời hứa cho mọi khách hàng.',
  },
  pricing: {
    eyebrow: 'Gói giải pháp',
    title: 'Bắt đầu ở mức phù hợp với giai đoạn của bạn',
    intro: 'Lộ trình linh hoạt, không ràng buộc dài hạn và có thể nâng cấp theo dữ liệu thực tế.',
    labels: {
      bestFor: 'Phù hợp',
      content: 'Nội dung',
      entity: 'Tối ưu thực thể',
      tracking: 'Đo AI Visibility',
      reporting: 'Báo cáo',
      choose: 'Chọn gói này',
    },
    plans: [
      {
        name: 'Khởi động',
        price: '6.000.000đ/tháng',
        bestFor: 'Chưa từng làm AI Visibility, muốn thử với chi phí thấp',
        content: '2–4 bài/tháng',
        entity: 'Cơ bản',
        tracking: 'Kiểm tra thủ công',
        reporting: 'Hàng tháng',
      },
      {
        name: 'Tăng trưởng',
        price: '12.000.000đ/tháng',
        recommended: 'Đề xuất',
        bestFor: 'Đã có web ổn định, ngân sách marketing đều đặn',
        content: '4–8 bài/tháng',
        entity: '+ Wikidata, social',
        tracking: 'Ahrefs Brand Radar / Otterly',
        reporting: '2 tuần/lần',
      },
      {
        name: 'Dẫn đầu',
        price: '15.000.000đ/tháng',
        bestFor: 'Muốn dẫn đầu ngành, đầu tư dài hạn để giữ vị trí',
        content: '8+ bài, ưu tiên theo dữ liệu',
        entity: 'Toàn diện + PR',
        tracking: 'Công cụ + phân tích đối thủ',
        reporting: '2 tuần/lần + trao đổi',
      },
    ],
    note:
      'Giá chưa gồm VAT, backlink/PR trả phí, quảng cáo trả phí và thiết kế lại toàn bộ website. Chốt cụ thể sau buổi khảo sát hiện trạng.',
  },
  commitments: {
    eyebrow: 'Cam kết từ GEO Pro',
    title: 'Minh bạch trong cách làm, linh hoạt trong hợp tác',
    items: [
      {
        icon: 'tabler:report-analytics',
        title: 'Theo dõi hiệu quả rõ ràng',
        description: 'Báo cáo định kỳ để đánh giá ngay trong quá trình triển khai, không phải chờ sáu tháng.',
      },
      {
        icon: 'tabler:calendar-off',
        title: 'Không ràng buộc dài hạn',
        description: 'Dừng hợp tác bất kỳ lúc nào với thông báo trước 30 ngày.',
      },
      {
        icon: 'tabler:copyright',
        title: 'Toàn quyền sở hữu tài sản',
        description: 'Nội dung và tài sản thương hiệu thuộc về khách hàng sau khi hoàn tất thanh toán.',
      },
      {
        icon: 'tabler:shield-check',
        title: 'Giảm rủi ro khi trải nghiệm',
        description: 'Hoàn 50% phí tháng đầu nếu không hài lòng và gửi yêu cầu trong vòng 30 ngày.',
      },
      {
        icon: 'tabler:target-arrow',
        title: 'Cam kết điều có thể kiểm soát',
        description: 'Không hứa trước thứ hạng; cam kết quy trình minh bạch và báo cáo đúng hạn.',
      },
    ],
  },
  contact: {
    eyebrow: 'Khảo sát miễn phí',
    title: 'Bắt đầu ngay với một buổi khảo sát hiện trạng miễn phí',
    description: 'Biết chính xác thương hiệu của bạn đang đứng ở đâu trước khi quyết định đầu tư.',
    bullets: [
      'Kiểm tra 10 truy vấn có giá trị thương mại cao trong ngành.',
      'So sánh mức độ hiện diện với tối đa 3 đối thủ.',
      'Đánh giá trên Google AI Overview, ChatGPT và Gemini.',
      'Nhận bản tổng hợp 1 trang với 3 ưu tiên cần xử lý trước.',
      'Kèm 30 phút trao đổi trực tiếp với GEO Pro.',
    ],
    call: 'Gọi ngay',
    email: 'Gửi email',
    ...shared.contact,
  },
  footer: {
    copyright: '© 2026 GEO Pro.',
    note: 'Cảm ơn đã theo dõi!',
    backToTop: 'Lên đầu trang',
  },
  ui: {
    visibilityMap: 'BẢN ĐỒ AI VISIBILITY',
    live: 'TRỰC TIẾP',
    visibilityAssessment: 'KHẢO SÁT AI VISIBILITY',
    secondaryCta: 'Xem GEO hoạt động',
    switchLang: 'Chuyển sang',
  },
};

const en: LandingCopy = {
  locale: 'en',
  meta: {
    title: 'GEO Pro — Brand visibility in the AI era',
    description:
      'GEO Pro helps businesses get found, cited, and chosen across SEO, Google AI Overview, and generative AI platforms.',
  },
  nav: {
    brand: shared.navBrand,
    links: [
      { label: 'The Problem', href: '#problem' },
      { label: 'Solution', href: '#solution' },
      { label: 'Process', href: '#process' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Contact', href: '#contact' },
    ],
    cta: 'Free Assessment',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  hero: {
    eyebrow: 'AI VISIBILITY · SEO · AIO · GEO',
    title: 'Three layers of visibility your business',
    titleAccent: 'needs to own',
    description:
      'Optimize your brand to be found on Google, understood correctly, cited, and recommended by AI.',
    cta: 'Get a free AI Visibility assessment',
    layerLabels: { where: 'Where you appear', meaning: 'In plain terms', goal: 'The goal' },
    layers: [
      {
        key: 'SEO',
        icon: 'tabler:search',
        color: 'navy',
        where: 'Google Search',
        meaning: 'Your website ranks well',
        goal: 'Being found',
      },
      {
        key: 'AIO',
        icon: 'tabler:sparkles',
        color: 'coral',
        where: 'Google AI Overview',
        meaning: 'Your content gets summarized and cited by Google AI',
        goal: 'Being extracted',
      },
      {
        key: 'GEO',
        icon: 'tabler:message-chatbot',
        color: 'success',
        where: 'ChatGPT, Gemini, Perplexity, Claude',
        meaning: 'Your brand gets mentioned or recommended by AI',
        goal: 'Being mentioned and chosen',
      },
    ],
    close:
      'In the AI era, search behavior has changed. Brands that want to be found and chosen need to show up across SEO, AIO, and GEO at the same time.',
  },
  whyNow: {
    eyebrow: 'Why act now?',
    title: 'The AI visibility gap is widening every day',
    items: [
      {
        stat: '2.5B',
        title: 'The scale is too big to ignore',
        description:
          'Google AI Overview reached 2.5 billion monthly active users, on par with the scale of Google Search itself.',
        source: 'Google I/O 2026 · May 2026',
      },
      {
        stat: '− nearly 50%',
        title: 'Clicks are shifting away',
        description:
          'When AI Overview appears, organic clicks drop by nearly half. When your brand is cited, clicks can increase by up to 35%.',
      },
      {
        stat: '−49%',
        title: 'Even big names lose measurable traffic',
        description:
          'Chegg reported a 49% drop in non-subscriber traffic in one month as AI answered questions instead of sending users to its website.',
        source: 'Chegg · early 2025',
      },
      {
        stat: 'Top 3',
        title: "Outside the top 3, you're nearly invisible",
        description:
          'For local businesses, only those in the Top 3 Local Pack receive meaningful AI mentions; outside the top 3 is nearly zero.',
      },
    ],
    close:
      "This isn't a nice-to-have anymore. The slower you start, the harder it gets to close the gap with competitors.",
  },
  problem: {
    eyebrow: 'The problem businesses face',
    title: 'Ranking well does not guarantee a place in AI answers',
    items: [
      {
        icon: 'tabler:message-off',
        title: 'Not mentioned',
        description: 'Your website may rank well, yet your brand can still be absent when customers ask AI.',
      },
      {
        icon: 'tabler:focus-2',
        title: 'Not understood correctly',
        description: 'Inconsistent information makes it hard for AI to verify your business, products, and strengths.',
      },
      {
        icon: 'tabler:chart-dots-3',
        title: 'Uneven presence across 3 layers',
        description: 'You may be strong in SEO but weak in AIO or GEO; each layer needs different measurement and optimization.',
      },
    ],
    close:
      'When customers shift from searching to asking AI, not showing up means the chance to be considered is falling to a competitor.',
  },
  solution: {
    eyebrow: 'The GEO Pro solution',
    title: 'Turn AI visibility into a business advantage',
    intro:
      'One strategy spanning technical foundations, content, and brand signals so your business can be found and chosen.',
    items: [
      {
        number: '01',
        title: 'Expand revenue opportunity',
        description: 'Capture high commercial-value queries and reach customers as they search, compare, and decide.',
      },
      {
        number: '02',
        title: 'Increase competitive advantage',
        description: 'Grow brand presence in AI answers and limit competitors from dominating emerging search platforms.',
      },
      {
        number: '03',
        title: 'Build a long-term brand asset',
        description: 'Accumulate authority through content, entity data, and trust signals — an advantage that compounds over time.',
      },
    ],
  },
  approach: {
    eyebrow: 'Our approach',
    title: 'Two strategic pillars across SEO, AIO, and GEO',
    intro: 'Combine a machine-readable foundation with a consistent and trustworthy brand entity.',
    pillars: [
      {
        number: '01',
        icon: 'tabler:braces',
        title: 'Digitize your product and content',
        description: 'Schema, load speed, and page structure create the shared foundation. Answer-first content helps AIO extract and GEO cite.',
        tags: ['Structured data', 'Core Web Vitals', 'Answer-first content'],
      },
      {
        number: '02',
        icon: 'tabler:affiliate',
        title: 'Build your brand entity',
        description: 'Align your website, Google Business Profile, Wikidata, and social channels while earning trusted mentions and reviews.',
        tags: ['Knowledge Graph', 'Entity consistency', 'Trusted mentions'],
      },
    ],
  },
  capabilities: {
    eyebrow: 'What we do',
    title: 'Manage the entire AI Visibility journey',
    intro: 'From current-state analysis and execution to measurement across multiple AI platforms.',
    areaLabel: 'Area',
    descriptionLabel: 'Description',
    items: [
      { icon: 'tabler:zoom-scan', area: 'Brand & competitor analysis', description: "Who's being mentioned by AI for your industry, and why." },
      { icon: 'tabler:world-code', area: 'Technical audit & AI readability', description: 'Load speed, structured data, and how well AI bots can read your website.' },
      { icon: 'tabler:file-pencil', area: 'Expert content development', description: 'A multi-step review process — never an AI draft published as-is.' },
      { icon: 'tabler:circles-relation', area: 'Brand entity optimization', description: 'Schema, Google Business, Wikidata, and consistent social links.' },
      { icon: 'tabler:radar-2', area: 'AI visibility tracking', description: 'Measurement across ChatGPT, Gemini, Perplexity, Claude, and AI Overview.' },
    ],
  },
  process: {
    eyebrow: 'Our process',
    title: 'Five clear steps, measurable and continuously improved',
    intro: 'Every cycle starts with real data and ends with specific optimization decisions.',
    items: [
      { number: '01', title: 'Current-state assessment', timing: 'Week 1', description: 'Technical audit, AI Visibility baseline using real questions, and competitor analysis.' },
      { number: '02', title: 'Strategy building', timing: 'Weeks 1–2', description: 'Identify priority topics, keywords, and channels that match real customer behavior.' },
      { number: '03', title: 'Execution', timing: 'Ongoing', description: 'Create reviewed content, implement structured data, and distribute through the right channels.' },
      { number: '04', title: 'Measurement', timing: 'Monthly / bi-weekly', description: 'Re-run baseline questions and track rankings, mentions, and traffic.' },
      { number: '05', title: 'Continuous optimization', timing: 'Every cycle', description: 'Adjust the strategy based on real data from the previous cycle.' },
    ],
  },
  caseStudy: {
    eyebrow: 'Featured project',
    title: 'Tanuki Art Supplies',
    category: 'Independent art supply store',
    location: 'Hanoi, Vietnam',
    description:
      'After standardizing technical foundations and brand information, Tanuki materially improved its visibility in AI-powered search experiences.',
    results: [
      { value: '#1', label: 'Premium category on Google AI Mode' },
      { value: '#1', label: 'In a map-style AI answer' },
    ],
    timeframe: 'Recorded within 1–3 months · July 2026',
    disclaimer: 'Measured at a single point in time; results can change and are not a promise for every client.',
  },
  pricing: {
    eyebrow: 'Plans',
    title: 'Start at the level that fits your stage',
    intro: 'A flexible path with no long-term lock-in, ready to scale as real data comes in.',
    labels: { bestFor: 'Best for', content: 'Content', entity: 'Entity optimization', tracking: 'AI Visibility tracking', reporting: 'Reporting', choose: 'Choose this plan' },
    plans: [
      { name: 'Starter', price: '6,000,000₫/month', bestFor: 'New to AI Visibility and want a low-cost starting point', content: '2–4 pieces/month', entity: 'Basic', tracking: 'Manual checks', reporting: 'Monthly' },
      { name: 'Growth', price: '12,000,000₫/month', recommended: 'Recommended', bestFor: 'Stable website and a steady marketing budget', content: '4–8 pieces/month', entity: '+ Wikidata, social', tracking: 'Ahrefs Brand Radar / Otterly', reporting: 'Every 2 weeks' },
      { name: 'Leader', price: '15,000,000₫/month', bestFor: 'Industry leadership and long-term investment', content: '8+ pieces, data-prioritized', entity: 'Comprehensive + PR', tracking: 'Tooling + competitor analysis', reporting: 'Every 2 weeks + calls' },
    ],
    note: 'Prices exclude VAT, paid backlinks/PR, paid ads, and full website redesign. Final scope is agreed after the current-state assessment.',
  },
  commitments: {
    eyebrow: 'Our commitments',
    title: 'Transparent in delivery, flexible in partnership',
    items: [
      { icon: 'tabler:report-analytics', title: 'Clear performance tracking', description: 'Regular reporting lets you evaluate progress during the engagement, not after six months.' },
      { icon: 'tabler:calendar-off', title: 'No long-term lock-in', description: "Stop anytime with 30 days' notice." },
      { icon: 'tabler:copyright', title: 'You fully own the assets', description: 'All content and brand assets belong to you once payment is complete.' },
      { icon: 'tabler:shield-check', title: 'Lower risk while you try it', description: "50% refund on the first month's fee when requested within 30 days." },
      { icon: 'tabler:target-arrow', title: 'We commit to what we control', description: 'No promises on rankings; we commit to transparent process and on-time reporting.' },
    ],
  },
  contact: {
    eyebrow: 'Free assessment',
    title: 'Start with a free current-state assessment',
    description: 'Know exactly where your brand stands before deciding what to invest.',
    bullets: [
      'Check 10 high commercial-value queries in your industry.',
      'Compare visibility against up to 3 competitors.',
      'Assess Google AI Overview, ChatGPT, and Gemini.',
      'Get a 1-page summary with the top 3 priorities.',
      'Includes a 30-minute call with GEO Pro.',
    ],
    call: 'Call now',
    email: 'Send an email',
    name: '[Contact name]',
    phone: '[Phone]',
    emailAddress: '[Email]',
    phoneHref: shared.contact.phoneHref,
    emailHref: shared.contact.emailHref,
  },
  footer: {
    copyright: '© 2026 GEO Pro.',
    note: 'Thanks for stopping by!',
    backToTop: 'Back to top',
  },
  ui: {
    visibilityMap: 'AI VISIBILITY MAP',
    live: 'LIVE',
    visibilityAssessment: 'AI VISIBILITY ASSESSMENT',
    secondaryCta: 'See how GEO works',
    switchLang: 'Switch to',
  },
};

export const landingCopy: Record<Locale, LandingCopy> = { vi, en };
