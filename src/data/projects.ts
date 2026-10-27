export interface Project {
  id: string;
  slug: string;
  title: string;
  category: "Analytics" | "Engineering";
  badge: {
    text: string;
    variant: "cyan" | "blue" | "purple" | "emerald";
  };
  tools: string[];
  shortDescription: string;
  image: string;
  date: string;
  metrics: {
    label: string;
    value: string;
    trend?: string;
  }[];
  overview: string;
  problemStatement: string;
  methodology: string[];
  keyFindings: string[];
  businessImpact: string[];
  codeSnippet?: {
    language: string;
    title: string;
    code: string;
  };
  liveUrl?: string;
  githubUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: "sales-performance-analysis",
    slug: "sales-performance-analysis",
    title: "Sales Performance Analysis",
    category: "Analytics",
    badge: {
      text: "Analytics",
      variant: "blue",
    },
    tools: ["Power BI", "SQL"],
    shortDescription:
      "Analyze sales data to find trends, top products, and performance metrics using Power BI.",
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
    category: "Analytics",
    badge: {
      text: "Analytics",
      variant: "blue",
    },
    tools: ["Python", "Pandas", "Matplotlib"],
    shortDescription:
      "Clean and explore a real-world dataset, handle missing values, and uncover patterns with visualizations.",
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
    category: "Analytics",
    badge: {
      text: "Analytics",
      variant: "blue",
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
    id: "real-time-clickstream-analytics",
    slug: "real-time-clickstream-analytics",
    title: "Real-Time Clickstream Analytics",
    category: "Engineering",
    badge: {
      text: "Engineering",
      variant: "emerald",
    },
    tools: ["Kafka", "Spark", "MySQL", "Zeppelin"],
    shortDescription:
      "Built a real-time data pipeline to process clickstream events and generate insights for user behavior analysis.",
    image: "/images/project_clickstream.png",
    date: "2025",
    metrics: [
      { label: "Event Throughput", value: "25,000 / sec" },
      { label: "Streaming Latency", value: "< 120 ms" },
      { label: "Daily Data Volume", value: "85 GB / day" },
      { label: "Availability SLA", value: "99.95%" },
    ],
    overview:
      "An end-to-end distributed real-time data engineering pipeline built to ingest, process, and analyze web clickstream events. The system leverages Apache Kafka for high-throughput event pub/sub, Apache Spark Streaming for real-time windowed aggregations, and MySQL for persisting aggregated analytics queried via Apache Zeppelin.",
    problemStatement:
      "The product analytics team relied on batch daily jobs to compute user engagement metrics, causing a 24-hour delay in identifying broken checkout funnels and marketing campaign conversion dips.",
    methodology: [
      "Configured multi-broker Apache Kafka cluster with topic partitioning to handle bursty web traffic up to 25k events/sec.",
      "Developed PySpark Structured Streaming jobs with sliding tumbling windows to calculate real-time session duration and bounce rates.",
      "Implemented idempotent writes into MySQL to prevent duplicate event ingestion during broker failovers.",
      "Configured interactive Zeppelin dashboards for real-time visual inspection of live funnels and error rates.",
    ],
    keyFindings: [
      "Sub-second event processing reduced conversion drop detection from 24 hours to under 3 minutes.",
      "Identified that 64% of cart drop-offs occurred during step 2 of payment verification on mobile Safari browsers.",
      "Kafka consumer group parallelism maintained steady state with under 5% broker CPU utilization.",
    ],
    businessImpact: [
      "Enabled instant alerts for frontend application errors, preventing estimated thousands in lost checkout revenue.",
      "Established the primary streaming architecture foundation for downstream personalization systems.",
    ],
    codeSnippet: {
      language: "python",
      title: "PySpark Structured Streaming: Kafka Ingestion & Sliding Window Aggregation",
      code: `from pyspark.sql import SparkSession
from pyspark.sql.functions import from_json, col, window, count, expr
from pyspark.sql.types import StructType, StringType, TimestampType

spark = SparkSession.builder \\
    .appName("ClickstreamStreamingAnalytics") \\
    .config("spark.sql.shuffle.partitions", "4") \\
    .getOrCreate()

# Schema definition for clickstream events
schema = StructType() \\
    .add("user_id", StringType()) \\
    .add("session_id", StringType()) \\
    .add("event_type", StringType()) \\
    .add("page_url", StringType()) \\
    .add("timestamp", TimestampType())

# Read streaming events from Kafka
raw_stream = spark.readStream \\
    .format("kafka") \\
    .option("kafka.bootstrap.servers", "localhost:9092") \\
    .option("subscribe", "web_clickstream") \\
    .load()

# Parse JSON payload and apply 5-minute tumbling window
parsed = raw_stream.selectExpr("CAST(value AS STRING) as json_payload") \\
    .select(from_json(col("json_payload"), schema).alias("data")) \\
    .select("data.*") \\
    .withWatermark("timestamp", "10 minutes")

# Windowed aggregation of active sessions and event rates
windowed_counts = parsed.groupBy(
    window(col("timestamp"), "5 minutes", "1 minute"),
    col("event_type")
).count()

# Stream to MySQL or downstream sink
query = windowed_counts.writeStream \\
    .outputMode("update") \\
    .format("console") \\
    .start()

query.awaitTermination()`,
    },
    liveUrl: "https://github.com/bonssss/real-time-clickstream-analytics#architecture",
    githubUrl: "https://github.com/bonssss/real-time-clickstream-analytics",
  },
];
