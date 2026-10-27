import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    id: "sales-performance-analysis",
    slug: "sales-performance-analysis",
    title: "Sales Performance Analysis",
    badge: {
      text: "Power BI",
      variant: "cyan",
    },
    tools: ["Power BI", "SQL"],
    shortDescription:
      "Analyzed sales data to find revenue trends, profitability, and top-performing products. Built an interactive dashboard with key KPIs and visual insights.",
    image: "/images/project_sales.png",
    date: "2025",
    metrics: [
      { label: "Total Revenue", value: "$125,430", trend: "+12.5% MoM" },
      { label: "Orders Analyzed", value: "2,842", trend: "+8.3% MoM" },
      { label: "Profit Margin", value: "18.6%", trend: "+4.2% pts" },
      { label: "Top Segment", value: "Electronics (29%)" },
    ],
    overview:
      "An end-to-end commercial performance evaluation conducted on a multi-category retail dataset. The project integrates raw transaction databases with an intuitive executive Power BI dashboard, enabling stakeholders to rapidly diagnose revenue bottlenecks and identify margin growth drivers across regions.",
    problemStatement:
      "The business experienced monthly revenue fluctuations with limited visibility into product-level margins and regional delivery overheads. Decision-makers lacked real-time visibility into which product categories yielded net profit versus mere gross sales volume.",
    methodology: [
      "Extracted 50,000+ sales records from PostgreSQL using parameterized CTEs to consolidate orders, returns, and logistics fees.",
      "Engineered data modeling in Power BI using a Star Schema (fact_sales joined with dim_customers, dim_products, dim_dates).",
      "Created DAX measures for Year-over-Year (YoY) revenue growth, moving average sales velocity, and gross margin percentage.",
      "Designed an accessible visual layout prioritizing executive summary KPI cards, category breakdown donuts, and trendlines.",
    ],
    keyFindings: [
      "Electronics dominated top-line revenue (29%), but Home & Living delivered the highest net margin per order (24.1%).",
      "Q3 sales experienced a 14% drop attributable to stock-outs in regional fulfilment centers, not diminishing consumer demand.",
      "Discount rates exceeding 15% failed to drive incremental margin volume, resulting in margin erosion in two major categories.",
    ],
    businessImpact: [
      "Provided leadership with actionable visibility, recommending recalibration of promotional discounting thresholds.",
      "Reduced monthly reporting preparation from 12 hours of manual spreadsheets to automated daily dashboard refreshes.",
    ],
    codeSnippet: {
      language: "sql",
      title: "SQL Query: Monthly Margin & Category Velocity",
      code: `WITH monthly_sales AS (
    SELECT 
        DATE_TRUNC('month', o.order_date) AS sales_month,
        p.category_name,
        COUNT(DISTINCT o.order_id) AS total_orders,
        SUM(oi.quantity * oi.unit_price) AS gross_revenue,
        SUM(oi.quantity * (oi.unit_price - oi.unit_cost)) AS gross_profit
    FROM orders o
    JOIN order_items oi ON o.order_id = oi.order_id
    JOIN products p ON oi.product_id = p.product_id
    WHERE o.status = 'Completed'
    GROUP BY 1, 2
)
SELECT 
    sales_month,
    category_name,
    gross_revenue,
    gross_profit,
    ROUND((gross_profit / NULLIF(gross_revenue, 0) * 100)::numeric, 2) AS profit_margin_pct,
    RANK() OVER (PARTITION BY sales_month ORDER BY gross_revenue DESC) AS revenue_rank
FROM monthly_sales
ORDER BY sales_month DESC, revenue_rank ASC;`,
    },
    liveUrl: "https://app.powerbi.com/view?r=eyJrIjoiZGVtby1zYWxlcy1hbmFseXRpY3MtcG9ydGZvbGlvIn0%3D",
    githubUrl: "https://github.com/bonssss/sales-performance-analysis",
  },
  {
    id: "exploratory-data-analysis",
    slug: "exploratory-data-analysis",
    title: "Exploratory Data Analysis",
    badge: {
      text: "Python",
      variant: "blue",
    },
    tools: ["Python", "Pandas", "Matplotlib"],
    shortDescription:
      "Cleaned and explored a real-world dataset, handled missing values, and discovered patterns using statistical analysis and visualizations.",
    image: "/images/project_eda.png",
    date: "2025",
    metrics: [
      { label: "Data Records Cleaned", value: "120,000+" },
      { label: "Missing Values Treated", value: "8.4% of rows" },
      { label: "Key Features Correlated", value: "24 Attributes" },
      { label: "Anomalies Detected", value: "340 Outliers" },
    ],
    overview:
      "A systematic exploratory investigation into demographic, behavioral, and transactional data patterns. Employs robust data wrangling techniques in Python, hypothesis validation, and rich visual distributions to uncover non-obvious correlations before downstream modeling.",
    problemStatement:
      "A raw customer transaction dataset exhibited substantial noise, including inconsistent datetime stamps, skewed distributions, and undetected multivariate outliers that distorted previous linear regression assumptions.",
    methodology: [
      "Assessed data quality using custom automated auditing functions (missingness heatmaps, cardinality checks, skewness scores).",
      "Applied iterative imputation and median imputation strategies based on feature distribution and missing mechanism (MAR).",
      "Conducted univariate and bivariate visual exploration with Seaborn and Matplotlib (KDE plots, boxplots, pair grids).",
      "Applied Interquartile Range (IQR) filtering and log-transformations to normalize right-skewed revenue variables.",
    ],
    keyFindings: [
      "Customer lifetime spend exhibited a severe Pareto distribution, with top 18% of accounts generating 72% of cumulative value.",
      "Correlation matrix revealed a strong negative correlation (-0.68) between service response latency and 90-day retention.",
      "Weekend transactions exhibited 2.4x higher basket size compared to weekday purchasing patterns.",
    ],
    businessImpact: [
      "Built a reproducible Jupyter analysis pipeline that cut exploratory data prep time for future analysis sprints by 60%.",
      "Documented clean feature transformation recipes adopted by subsequent analytical workflows.",
    ],
    codeSnippet: {
      language: "python",
      title: "Python Pipeline: Outlier Handling & Distribution Cleaning",
      code: `import pandas as pd
import numpy as np

def clean_and_transform_features(df: pd.DataFrame) -> pd.DataFrame:
    df_clean = df.copy()
    
    # Clean timestamp and derive temporal dimensions
    df_clean['order_date'] = pd.to_datetime(df_clean['order_date'], errors='coerce')
    df_clean['is_weekend'] = df_clean['order_date'].dt.dayofweek.isin([5, 6]).astype(int)
    
    # Impute missing values with group medians
    df_clean['tenure_months'] = df_clean.groupby('customer_tier')['tenure_months'].transform(
        lambda grp: grp.fillna(grp.median())
    )
    
    # Detect outliers using Interquartile Range (IQR)
    q25 = df_clean['transaction_amount'].quantile(0.25)
    q75 = df_clean['transaction_amount'].quantile(0.75)
    iqr = q75 - q25
    upper_bound = q75 + (1.5 * iqr)
    
    # Flag extreme outliers and apply log-transformation
    df_clean['is_outlier'] = (df_clean['transaction_amount'] > upper_bound).astype(int)
    df_clean['log_transaction_amount'] = np.log1p(df_clean['transaction_amount'])
    
    return df_clean`,
    },
    liveUrl: "https://nbviewer.org/github/bonssss/eda-data-pipeline/blob/main/notebooks/exploratory_analysis.ipynb",
    githubUrl: "https://github.com/bonssss/exploratory-data-analysis",
  },
  {
    id: "hr-analytics-dashboard",
    slug: "hr-analytics-dashboard",
    title: "HR Analytics Dashboard",
    badge: {
      text: "Power BI",
      variant: "cyan",
    },
    tools: ["Power BI", "Excel"],
    shortDescription:
      "Designed a dashboard to analyze employee attrition, demographics, and workforce trends with actionable insights.",
    image: "/images/project_hr.png",
    date: "2024",
    metrics: [
      { label: "Workforce Sample", value: "1,470 Employees" },
      { label: "Overall Attrition Rate", value: "16.1%", trend: "-2.3% YoY" },
      { label: "Avg Employee Tenure", value: "7.0 Years" },
      { label: "High Risk Dept", value: "Sales & R&D" },
    ],
    overview:
      "An interactive human resources intelligence system designed to help leadership understand employee turnover drivers, demographic diversity, and compensation parity across organizational tiers.",
    problemStatement:
      "HR executives struggled to identify why early-career team members were departing within the first 18 months, leading to high recruiting costs and depleted project continuity.",
    methodology: [
      "Consolidated raw demographic, performance review, and exit survey files from Excel into a standardized data model.",
      "Built dynamic cohort retention metrics tracking attrition rates across salary bands, overtime frequency, and distance from home.",
      "Constructed custom visual cards with conditional formatting to spotlight departments exceeding the 15% attrition threshold.",
      "Implemented role-based slicers enabling HR managers to drill down by department, job role, and education field.",
    ],
    keyFindings: [
      "Employees working mandatory overtime exhibited a 30.5% attrition rate compared to only 10.0% for non-overtime staff.",
      "Single employees with 1 to 3 years of experience had the highest flight risk, primarily driven by below-benchmark salary bands.",
      "Departments with structured mentorship programs retained 88% of new hires through their second anniversary.",
    ],
    businessImpact: [
      "Empowered HR leadership with proactive risk indicators to intervene before high-performing specialists resign.",
      "Informed a revised compensation review cycle for junior technical and analytical positions.",
    ],
    codeSnippet: {
      language: "dax",
      title: "DAX Measures: Attrition Rate & Overtime Impact",
      code: `// DAX Measure: Attrition Rate
Attrition Rate % = 
VAR TotalExits = CALCULATE(COUNTROWS('Employees'), 'Employees'[Attrition] = "Yes")
VAR TotalHeadcount = COUNTROWS('Employees')
RETURN
    DIVIDE(TotalExits, TotalHeadcount, 0)

// DAX Measure: Overtime Attrition Impact Ratio
OT_Attrition_Differential = 
VAR Attrition_With_OT = 
    CALCULATE([Attrition Rate %], 'Employees'[OverTime] = "Yes")
VAR Attrition_Without_OT = 
    CALCULATE([Attrition Rate %], 'Employees'[OverTime] = "No")
RETURN
    DIVIDE(Attrition_With_OT - Attrition_Without_OT, Attrition_Without_OT, 0)`,
    },
    liveUrl: "https://app.powerbi.com/view?r=eyJrIjoiZGVtby1oci1hbmFseXRpY3MtcG9ydGZvbGlvIn0%3D",
    githubUrl: "https://github.com/bonssss/hr-analytics-dashboard",
  },
  {
    id: "customer-behavior-analysis",
    slug: "customer-behavior-analysis",
    title: "Customer Behavior Analysis",
    badge: {
      text: "SQL",
      variant: "purple",
    },
    tools: ["SQL", "Python"],
    shortDescription:
      "Analyzed customer segments, purchase patterns, and retention rates to understand behavior and improve loyalty.",
    image: "/images/project_customer.png",
    date: "2024",
    metrics: [
      { label: "Active Customers", value: "43,800" },
      { label: "Champions Segment", value: "14.2%" },
      { label: "Repeat Purchase Rate", value: "32.8%", trend: "+5.1%" },
      { label: "Avg Customer LTV", value: "$412.50" },
    ],
    overview:
      "A comprehensive behavioral clustering and RFM (Recency, Frequency, Monetary) segmentation project. By tracking customer order histories and engagement signals, this analysis uncovers distinct buyer personas to drive targeted marketing retention campaigns.",
    problemStatement:
      "Marketing acquisition campaigns treated all registered users with identical email sequences, resulting in low conversion rates and high churn among high-value repeat shoppers.",
    methodology: [
      "Extracted 3 years of transaction history using SQL queries calculating individual Recency, Frequency, and Monetary scores.",
      "Assigned percentile-based RFM ratings (1-5 scale) using NTILE analytical window functions.",
      "Segmented customers into distinct tiers: 'Champions', 'Loyal Customers', 'At Risk', and 'Hibernating'.",
      "Exported aggregated cohorts to Python for K-Means cluster validation and silhouette score verification.",
    ],
    keyFindings: [
      "The 'Champions' cohort (14.2% of users) accounted for 54% of all profitable repeat sales in the trailing 12 months.",
      "Customers whose second order was placed within 21 days showed an 82% likelihood of becoming long-term loyalists.",
      "The 'At Risk' segment represented $180K in potential annual recurring revenue with zero touchpoints in the last 90 days.",
    ],
    businessImpact: [
      "Provided marketing teams with prioritized lists of high-value at-risk accounts for automated re-engagement offers.",
      "Improved overall email campaign click-through rate by 34% through targeted segmentation rather than blanket blasts.",
    ],
    codeSnippet: {
      language: "sql",
      title: "SQL Query: RFM Segmentation & Cohort Scoring",
      code: `WITH customer_rfm_raw AS (
    SELECT 
        customer_id,
        MAX(order_date) AS last_order_date,
        COUNT(DISTINCT order_id) AS total_frequency,
        SUM(order_total) AS total_monetary,
        CURRENT_DATE - MAX(order_date) AS recency_days
    FROM customer_orders
    WHERE order_status = 'Delivered'
    GROUP BY customer_id
),
rfm_scores AS (
    SELECT 
        customer_id,
        recency_days,
        total_frequency,
        total_monetary,
        NTILE(5) OVER (ORDER BY recency_days DESC) AS r_score,
        NTILE(5) OVER (ORDER BY total_frequency ASC) AS f_score,
        NTILE(5) OVER (ORDER BY total_monetary ASC) AS m_score
    FROM customer_rfm_raw
)
SELECT 
    customer_id,
    recency_days,
    total_frequency,
    total_monetary,
    r_score, f_score, m_score,
    CASE 
        WHEN r_score >= 4 AND (f_score + m_score) >= 8 THEN 'Champions'
        WHEN r_score >= 3 AND f_score >= 3 THEN 'Loyal Customers'
        WHEN r_score >= 4 AND f_score = 1 THEN 'Recent New Customers'
        WHEN r_score <= 2 AND (f_score + m_score) >= 6 THEN 'At Risk Customers'
        ELSE 'Hibernating / Churned'
    END AS customer_segment
FROM rfm_scores;`,
    },
    liveUrl: "https://github.com/bonssss/customer-behavior-analysis#case-study",
    githubUrl: "https://github.com/bonssss/customer-behavior-analysis",
  },
];
