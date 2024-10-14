export interface workFlowResponse{
    workflowId:string;
    runId: string;
    startTimeStamp: number;
    status: string;
    submittedBy: string;
  }
  
  export interface gsmResponse{
    results:any[];
    count:number;
    totalCount:number;
    limit:number;
  }
  
  export interface corrIdResponse{
    "evd-ltops": {
      "csv_parser_wf_status_gsm": string,
      "wellbore_ingestion_wf_gsm": string,
      "doc_ingestor_azure_ocr_wf": string,
      "shapefile_ingestor_wf_status_gsm": string
    },
    "evt-ltops": {
      "csv_parser_wf_status_gsm": string,
      "wellbore_ingestion_wf_gsm": string,
      "doc_ingestor_azure_ocr_wf": string,
      "shapefile_ingestor_wf_status_gsm": string
    },
    "prod-canary-ltops": {
      "csv_parser_wf_status_gsm": string,
      "wellbore_ingestion_wf_gsm": string,
      "doc_ingestor_azure_ocr_wf": string,
      "shapefile_ingestor_wf_status_gsm": string
    },
    "prod-aws-ltops": {
      "csv_parser_wf_status_gsm": string,
      "wellbore_ingestion_wf_gsm": string,
      "doc_ingestor_azure_ocr_wf": string,
      "shapefile_ingestor_wf_status_gsm": string
    }
  }