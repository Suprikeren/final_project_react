
export interface Jobs {
_id: string;
  title: string;
  job_description: string;
  job_qualification: string;
  job_type: string;         
  job_tenure: string;      
  job_status: boolean;    
  company_name: string;
  company_image_url: string;
  company_city: string;
  salary_min: number;
  salary_max: number;
  // __v: number;
  [key: string]: any;  
}

export interface JobsLink {
  url: string | null;
  label: string;
  active: boolean;
}
