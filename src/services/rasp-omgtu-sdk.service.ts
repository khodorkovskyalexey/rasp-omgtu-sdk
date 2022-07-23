import { BadRequestException, HttpService, Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { RaspOmgtuScheduleFor, ScheduleResponse, SearchResponse } from '../rasp-omgtu-sdk.types';

@Injectable()
export class RaspOmgtuSdkService {
  constructor(private readonly httpService: HttpService) {}

  static readonly baseApiUrl = 'https://rasp.omgtu.ru/api';

  private readonly searchUrl = `${RaspOmgtuSdkService.baseApiUrl}/search`;

  private readonly baseScheduleUrlMapper = {
    [RaspOmgtuScheduleFor.GROUP]: (id: number) => `${RaspOmgtuSdkService.baseApiUrl}/schedule/group/${id}`,
    [RaspOmgtuScheduleFor.AUDITORIUM]: (id: number) => `${RaspOmgtuSdkService.baseApiUrl}/schedule/auditorium/${id}`,
    [RaspOmgtuScheduleFor.PERSON]: (id: number) => `${RaspOmgtuSdkService.baseApiUrl}/schedule/person/${id}`,
    [RaspOmgtuScheduleFor.STUDENT]: (id: number) => `${RaspOmgtuSdkService.baseApiUrl}/schedule/student/${id}`,
    [RaspOmgtuScheduleFor.LECTURER]: (id: number) => `${RaspOmgtuSdkService.baseApiUrl}/schedule/lecturer/${id}`,
  };

  async search(type: RaspOmgtuScheduleFor, filter: string) {
    const url = `${this.searchUrl}?term=${filter}&type=${type}`;
    try {
      const groups = await this.fetch<SearchResponse>(encodeURI(url));

      return groups;
    } catch (error) {
      throw new BadRequestException((error as Error).message);
    }
  }

  async schedulesForGroup(groupId: number, start: string, finish: string, lng = 1) {
    const baseUrl = this.baseScheduleUrlMapper[RaspOmgtuScheduleFor.GROUP](groupId);
    const url = `${baseUrl}?start=${start}&finish=${finish}&lng=${lng}`;
    try {
      const schedules = await this.fetch<ScheduleResponse[]>(url);

      return schedules;
    } catch (error) {
      throw new BadRequestException((error as Error).message);
    }
  }

  async schedulesForAuditorium(auditoriumId: number, start: string, finish: string, lng = 1) {
    const baseUrl = this.baseScheduleUrlMapper[RaspOmgtuScheduleFor.AUDITORIUM](auditoriumId);
    const url = `${baseUrl}?start=${start}&finish=${finish}&lng=${lng}`;
    try {
      const schedules = await this.fetch<ScheduleResponse[]>(url);

      return schedules;
    } catch (error) {
      throw new BadRequestException((error as Error).message);
    }
  }

  async schedulesForPerson(personId: number, start: string, finish: string, lng = 1) {
    const baseUrl = this.baseScheduleUrlMapper[RaspOmgtuScheduleFor.PERSON](personId);
    const url = `${baseUrl}?start=${start}&finish=${finish}&lng=${lng}`;
    try {
      const schedules = await this.fetch<ScheduleResponse[]>(url);

      return schedules;
    } catch (error) {
      throw new BadRequestException((error as Error).message);
    }
  }

  async schedulesForLecturer(lecturerId: number, start: string, finish: string, lng = 1) {
    const baseUrl = this.baseScheduleUrlMapper[RaspOmgtuScheduleFor.LECTURER](lecturerId);
    const url = `${baseUrl}?start=${start}&finish=${finish}&lng=${lng}`;
    try {
      const schedules = await this.fetch<ScheduleResponse[]>(url);

      return schedules;
    } catch (error) {
      throw new BadRequestException((error as Error).message);
    }
  }

  async schedulesForStudent(studentId: number, start: string, finish: string, lng = 1) {
    const baseUrl = this.baseScheduleUrlMapper[RaspOmgtuScheduleFor.STUDENT](studentId);
    const url = `${baseUrl}?start=${start}&finish=${finish}&lng=${lng}`;
    try {
      const schedules = await this.fetch<ScheduleResponse[]>(url);

      return schedules;
    } catch (error) {
      throw new BadRequestException((error as Error).message);
    }
  }

  private async fetch<T>(url: string): Promise<T> {
    const fetch = this.httpService.get(url);
    const response = await firstValueFrom(fetch);
    if (!response) {
      throw new Error(`Fetch to ${url} return null`);
    }

    return Object.assign({}, response.data as T);
  }
}
