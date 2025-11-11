export interface FileUploadConfiguration {
  url: string;
  method?: "POST" | "PUT";
  headers?: { [key: string]: string };
}