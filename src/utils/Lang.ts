export const lang = (language: string) => {
  return language === "ka-GE"
    ? {
        copy: "ასლი",
        title: "ტრანსკრიპტი",
        instruction: "დააჭირეთ ღილაკს და ილაპარაკეთ საუბრის ჩასაწერად",
      }
    : {
        copy: "copy",
        title: "Transcript",
        instruction: "Hit play and speak to transcript your voice",
      };
};
