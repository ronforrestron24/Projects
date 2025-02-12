import { Injectable } from '@nestjs/common';
import { apiJournalentryitembasicSrv } from '../generated/API_JOURNALENTRYITEMBASIC_SRV/service';

@Injectable()
export class CostCenterService {
  async fetchCostCenters() {
    const destination = {
      // destinationName: 'myDestinationName',
      baseUrl: process.env.SAP_BASE_URL,
      username: process.env.SAP_USERNAME,
      password: process.env.SAP_PASSWORD,
    };

    const { costCenterApi } = apiJournalentryitembasicSrv();

    try {
      const result = await costCenterApi
        .requestBuilder()
        .getAll()
        .top(5)
        .execute(destination as any);
      return result; // Return the result
    } catch (error) {
      console.error('Error fetching cost centers:', error.message);
      console.error(error.stack);
      throw error; // Rethrow the error for handling in the controller
    }
  }
}
