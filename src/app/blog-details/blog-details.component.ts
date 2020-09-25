import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../shared/blog.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {
  BlogId;
  blogvalues;
  CommentForm: FormGroup;
  constructor(private route: ActivatedRoute, private blogService: BlogService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.BlogId = params.get("BlogId");
      this.getBlog();
    })
  }
  getBlog() {
    this.blogService.getSingleBlog(this.BlogId).subscribe(m => {
      this.blogvalues = m
      console.log('this.blogvalues', this.blogvalues)
    })
  }

}
