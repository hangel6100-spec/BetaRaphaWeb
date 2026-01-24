-- Create table for blog posts/news updates
CREATE TABLE public.blog_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  summary TEXT NOT NULL,
  source TEXT NOT NULL, -- 'health_canada', 'who', 'industry'
  category TEXT, -- For industry news categorization
  external_link TEXT,
  published_date DATE NOT NULL,
  fetched_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access (blog posts are public)
CREATE POLICY "Blog posts are publicly readable" 
ON public.blog_posts 
FOR SELECT 
USING (true);

-- Create policy for service role to insert/update/delete
CREATE POLICY "Service role can manage blog posts" 
ON public.blog_posts 
FOR ALL 
USING (true)
WITH CHECK (true);

-- Create index for faster queries
CREATE INDEX idx_blog_posts_source ON public.blog_posts(source);
CREATE INDEX idx_blog_posts_published_date ON public.blog_posts(published_date DESC);
CREATE INDEX idx_blog_posts_fetched_at ON public.blog_posts(fetched_at DESC);