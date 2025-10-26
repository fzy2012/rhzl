# 部署指南

## 🚀 快速部署到 Vercel

### 方式一：通过 Vercel Dashboard（推荐）

1. **前往 Vercel**
   - 访问 [vercel.com](https://vercel.com)
   - 使用 GitHub 账号登录

2. **导入项目**
   - 点击 "New Project"
   - 选择你的 GitHub 仓库 `fzy2012/rhzl`
   - 点击 "Import"

3. **配置项目**
   - **Framework Preset**: Next.js (自动检测)
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`

4. **部署**
   - 点击 "Deploy"
   - 等待构建完成（约2-3分钟）
   - 获得生产环境 URL（如 `https://rhzl.vercel.app`）

5. **自定义域名（可选）**
   - 在项目设置中添加自定义域名
   - 配置 DNS 记录指向 Vercel
   - 自动获得 HTTPS 证书

### 方式二：通过 Vercel CLI

```bash
# 安装 Vercel CLI
npm install -g vercel

# 登录
vercel login

# 部署
cd /path/to/webapp
vercel

# 部署到生产环境
vercel --prod
```

---

## 🐳 Docker 部署

### 创建 Dockerfile

```dockerfile
FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

### 构建和运行

```bash
# 构建镜像
docker build -t rhzl-knowledge-hub .

# 运行容器
docker run -p 3000:3000 rhzl-knowledge-hub
```

### Docker Compose

创建 `docker-compose.yml`:

```yaml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

运行：
```bash
docker-compose up -d
```

---

## 📦 传统服务器部署

### 准备工作

1. **服务器要求**
   - Node.js 18+ 
   - npm 或 yarn
   - Nginx（可选，用于反向代理）
   - 至少 512MB RAM

2. **上传代码**
   ```bash
   # 方式1: Git clone
   git clone https://github.com/fzy2012/rhzl.git
   cd rhzl
   
   # 方式2: 使用 rsync
   rsync -avz --exclude 'node_modules' ./ user@server:/path/to/app/
   ```

### 安装和构建

```bash
# 安装依赖
npm install

# 构建生产版本
npm run build

# 启动应用
npm start
```

### 使用 PM2 保持应用运行

```bash
# 安装 PM2
npm install -g pm2

# 启动应用
pm2 start npm --name "rhzl" -- start

# 保存 PM2 配置
pm2 save

# 设置开机自启
pm2 startup
```

### Nginx 反向代理配置

创建 `/etc/nginx/sites-available/rhzl`:

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

启用配置：
```bash
sudo ln -s /etc/nginx/sites-available/rhzl /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### SSL 证书（Let's Encrypt）

```bash
# 安装 Certbot
sudo apt install certbot python3-certbot-nginx

# 获取证书
sudo certbot --nginx -d yourdomain.com

# 自动续期
sudo certbot renew --dry-run
```

---

## ☁️ 其他云平台部署

### Netlify

1. 连接 GitHub 仓库
2. 配置构建设置：
   - Build command: `npm run build`
   - Publish directory: `.next`
3. 点击 Deploy

### Railway

1. 连接 GitHub 仓库
2. 自动检测 Next.js 项目
3. 一键部署

### AWS Amplify

1. 连接 GitHub 仓库
2. 选择 Next.js SSR 配置
3. 配置构建设置
4. 部署

---

## 🔧 环境变量配置

创建 `.env.production`:

```bash
# 应用配置
NEXT_PUBLIC_APP_URL=https://yourdomain.com
NEXT_PUBLIC_APP_NAME=儒航智库

# 数据库（未来）
# DATABASE_URL=postgresql://user:password@host:5432/dbname

# 认证（未来）
# NEXTAUTH_URL=https://yourdomain.com
# NEXTAUTH_SECRET=your-secret-key

# API Keys（未来）
# OPENAI_API_KEY=sk-xxx
```

---

## 📊 监控和日志

### Vercel Analytics（推荐）

Vercel 自动提供：
- 实时访问统计
- 性能监控
- Web Vitals 指标

### 自定义监控

可以集成：
- **Sentry**: 错误追踪
- **LogRocket**: 用户会话回放
- **Google Analytics**: 访问统计
- **Posthog**: 产品分析

---

## 🔄 持续部署 (CI/CD)

### GitHub Actions

创建 `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID}}
          vercel-project-id: ${{ secrets.PROJECT_ID}}
          vercel-args: '--prod'
```

---

## 🎯 性能优化建议

### 构建优化

1. **启用 SWC Minify**（已默认启用）
2. **图片优化**: 使用 Next.js Image 组件
3. **代码分割**: 动态导入大型组件
4. **字体优化**: 使用 next/font

### 运行时优化

1. **CDN**: 使用 Vercel Edge Network 或 Cloudflare
2. **缓存策略**: 配置合理的缓存头
3. **压缩**: 启用 Gzip/Brotli 压缩
4. **ISR**: 使用增量静态再生成

---

## 🔒 安全建议

1. **环境变量**: 敏感信息不要提交到 Git
2. **HTTPS**: 始终使用 HTTPS
3. **CSP**: 配置内容安全策略
4. **CORS**: 限制跨域请求
5. **更新依赖**: 定期更新依赖包

---

## 📝 部署检查清单

部署前确认：
- [ ] 代码已提交并推送到 GitHub
- [ ] 所有测试通过
- [ ] README 和文档已更新
- [ ] 环境变量已配置
- [ ] 构建成功无错误
- [ ] 本地生产构建测试通过
- [ ] 性能指标符合预期

部署后验证：
- [ ] 网站可以正常访问
- [ ] 所有页面加载正常
- [ ] 响应式设计在各设备正常
- [ ] 图片和静态资源加载正常
- [ ] 没有控制台错误
- [ ] 性能指标正常（Lighthouse）

---

## 🆘 故障排查

### 构建失败

1. 检查 Node.js 版本
2. 删除 `node_modules` 和 `.next`
3. 重新安装依赖
4. 检查 TypeScript 错误

### 运行时错误

1. 查看服务器日志
2. 检查环境变量
3. 验证 API 端点
4. 检查网络请求

### 性能问题

1. 使用 Lighthouse 分析
2. 检查大型资源文件
3. 优化图片和字体
4. 启用缓存

---

## 📞 支持

如有问题，请：
1. 查看项目 README
2. 提交 GitHub Issue
3. 查看 Next.js 官方文档

**部署成功后，不要忘记更新 README 中的线上地址！** 🎉
