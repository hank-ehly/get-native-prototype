class UsersController < ApplicationController
  def hasVideo

  	result = false

  	u   = User.find(params[:user_id])
  	v   = Video.find(params[:video_id])
    uc  = u.language_modules.find_by(language_id: v.language_id).cue;
  	cvs = uc.videos

  	cvs.each do |c|
			if c.id === v.id
				result = true
     		puts c.id.to_s + ' ******** IS EQUAL TO ******* ' + v.id.to_s
  		end
 		end

 		render json: {
      result: result,
      cue: uc
    }

  end
end
